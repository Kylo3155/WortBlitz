/**
 * WortBlitz ⚡ - Lógica Principal de la Aplicación
 */

(function () {
  'use strict';

  // --- Estado de la aplicación ---
  const state = {
    difficulty: 'easy', // 'easy' (solo artículo) | 'medium' (artículo + plural) | 'hard' (todo)
    category: 'all',
    level: 'all',
    isReviewingMistakes: false,
    
    deck: [],
    currentIndex: 0,
    currentWord: null,
    evaluated: false,
    isShowingCorrection: false,
    correctionOpenedAt: 0,
    
    mistakes: new Set(), // IDs de palabras falladas
    
    stats: {
      streak: 0,
      correct: 0,
      total: 0
    },
    
    soundEnabled: true,
    theme: 'dark',
    lastActiveInput: null
  };

  // --- Elementos del DOM ---
  const dom = {
    // Header & Controls
    soundToggle: document.getElementById('btn-sound-toggle'),
    soundIcon: document.getElementById('sound-icon'),
    themeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    btnVocabModal: document.getElementById('btn-vocab-modal'),
    
    // Stats
    statStreak: document.getElementById('stat-streak'),
    statCorrect: document.getElementById('stat-correct'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statTotal: document.getElementById('stat-total'),

    // Difficulty & Filters (3 Modos: Fácil, Medio, Difícil)
    modeEasy: document.getElementById('mode-easy'),
    modeMedium: document.getElementById('mode-medium'),
    modeHard: document.getElementById('mode-hard'),
    categorySelect: document.getElementById('category-select'),
    levelSelect: document.getElementById('level-select'),
    btnReviewMistakes: document.getElementById('btn-review-mistakes'),
    mistakesCount: document.getElementById('mistakes-count'),

    // Card presentation
    practiceCard: document.getElementById('practice-card'),
    cardCategory: document.getElementById('card-category'),
    cardLevel: document.getElementById('card-level'),
    cardModeBadge: document.getElementById('card-mode-badge'),
    cardProgress: document.getElementById('card-progress'),
    targetNoun: document.getElementById('target-noun'),
    btnPronounce: document.getElementById('btn-pronounce'),
    translationHintBox: document.getElementById('translation-hint-box'),
    targetTranslationHint: document.getElementById('target-translation-hint'),

    // Form inputs
    form: document.getElementById('practice-form'),
    inputArticle: document.getElementById('input-article'),
    inputPlural: document.getElementById('input-plural'),
    pluralFieldHint: document.getElementById('plural-field-hint'),
    inputTranslation: document.getElementById('input-translation'),
    translationFieldHint: document.getElementById('translation-field-hint'),
    articleQuickBtns: document.querySelectorAll('.article-quick-btn'),
    umlautKeys: document.querySelectorAll('.umlaut-key'),

    // Actions & Feedback
    btnSubmit: document.getElementById('btn-submit'),
    btnSubmitIcon: document.getElementById('btn-submit-icon'),
    btnSubmitText: document.getElementById('btn-submit-text'),
    btnSkip: document.getElementById('btn-skip'),
    feedbackBox: document.getElementById('feedback-box'),
    feedbackHeader: document.getElementById('feedback-header'),
    feedbackDetails: document.getElementById('feedback-details'),

    // Modals
    modalVocab: document.getElementById('modal-vocab'),
    modalVocabTotal: document.getElementById('modal-vocab-total'),
    vocabSearch: document.getElementById('vocab-search'),
    vocabList: document.getElementById('vocab-list'),
    closeModalBtns: document.querySelectorAll('.close-modal'),

    // Modal de Corrección (Cartel de solución ante error)
    modalCorrection: document.getElementById('modal-correction'),
    btnCloseCorrection: document.getElementById('btn-close-correction'),
    btnContinueAfterError: document.getElementById('btn-continue-after-error'),
    corrHeroArticle: document.getElementById('corr-hero-article'),
    corrHeroNoun: document.getElementById('corr-hero-noun'),
    corrHeroTranslation: document.getElementById('corr-hero-translation'),
    corrBtnSpeak: document.getElementById('corr-btn-speak'),
    corrCatBadge: document.getElementById('corr-cat-badge'),
    corrLevelBadge: document.getElementById('corr-level-badge'),

    cardArticle: document.getElementById('solution-card-article'),
    corrValArticle: document.getElementById('corr-val-article'),
    corrUserArticle: document.getElementById('corr-user-article'),
    statusIconArticle: document.getElementById('status-icon-article'),

    cardPlural: document.getElementById('solution-card-plural'),
    corrValPlural: document.getElementById('corr-val-plural'),
    corrUserPlural: document.getElementById('corr-user-plural'),
    statusIconPlural: document.getElementById('status-icon-plural'),

    cardTrans: document.getElementById('solution-card-trans'),
    corrValTrans: document.getElementById('corr-val-trans'),
    corrUserTrans: document.getElementById('corr-user-trans'),
    statusIconTrans: document.getElementById('status-icon-trans')
  };

  // --- Inicialización ---
  function init() {
    loadPreferences();
    setupEventListeners();
    buildDeck();
    loadWord(0);
    renderVocabModal();
  }

  // Cargar preferencias guardadas en LocalStorage
  function loadPreferences() {
    const savedTheme = localStorage.getItem('wm_theme');
    if (savedTheme) {
      state.theme = savedTheme;
      document.documentElement.setAttribute('data-theme', savedTheme);
      dom.themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }

    const savedSound = localStorage.getItem('wm_sound');
    if (savedSound !== null) {
      state.soundEnabled = savedSound === 'true';
      soundManager.enabled = state.soundEnabled;
      dom.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    }

    const savedDifficulty = localStorage.getItem('wm_difficulty');
    if (savedDifficulty === 'hard' || savedDifficulty === 'challenge') {
      setDifficulty('hard');
    } else if (savedDifficulty === 'medium') {
      setDifficulty('medium');
    } else {
      setDifficulty('easy');
    }
  }

  // --- Configuración de Baraja (Deck) ---
  function buildDeck(keepPosition = false) {
    let list = [...GERMAN_NOUNS];

    if (state.isReviewingMistakes) {
      list = list.filter(w => state.mistakes.has(w.id));
      if (list.length === 0) {
        state.isReviewingMistakes = false;
        dom.btnReviewMistakes.classList.remove('active');
        list = [...GERMAN_NOUNS];
      }
    } else {
      if (state.category !== 'all') {
        list = list.filter(w => w.category === state.category);
      }
      if (state.level !== 'all') {
        list = list.filter(w => w.level === state.level);
      }
    }

    // Barajar aleatoriamente (Fisher-Yates)
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    state.deck = list.length > 0 ? list : [...GERMAN_NOUNS];
    if (!keepPosition) {
      state.currentIndex = 0;
    }
  }

  // --- Carga de Palabra Actual ---
  function loadWord(index) {
    if (state.deck.length === 0) {
      buildDeck();
    }

    if (index >= state.deck.length) {
      // Barajar de nuevo al terminar
      buildDeck();
      index = 0;
    }

    state.currentIndex = index;
    state.currentWord = state.deck[index];
    state.evaluated = false;

    // Actualizar visualización
    dom.cardCategory.textContent = state.currentWord.category;
    dom.cardLevel.textContent = state.currentWord.level;
    dom.cardProgress.textContent = `${state.currentIndex + 1} de ${state.deck.length}`;
    dom.targetNoun.textContent = state.currentWord.noun;

    // Resetear formulario
    dom.form.reset();
    clearInputStates();
    dom.feedbackBox.className = 'feedback-box';
    dom.feedbackBox.innerHTML = '';

    // Restablecer botón
    dom.btnSubmit.className = 'btn-primary';
    dom.btnSubmitIcon.textContent = '✓';
    dom.btnSubmitText.textContent = 'Verificar';

    // Deseleccionar botones rápidos de artículo
    dom.articleQuickBtns.forEach(btn => btn.classList.remove('active'));

    // Configurar según modo de dificultad
    updateModeDisplay();

    // Auto-foco en el primer campo requerido
    setTimeout(() => {
      dom.inputArticle.focus();
      state.lastActiveInput = dom.inputArticle;
    }, 50);
  }

  // --- Manejo de Dificultades (Fácil, Medio, Difícil) ---
  function setDifficulty(mode) {
    state.difficulty = mode;
    localStorage.setItem('wm_difficulty', mode);

    [dom.modeEasy, dom.modeMedium, dom.modeHard].forEach(btn => {
      if (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      }
    });

    if (mode === 'easy') {
      if (dom.modeEasy) {
        dom.modeEasy.classList.add('active');
        dom.modeEasy.setAttribute('aria-checked', 'true');
      }
      dom.cardModeBadge.textContent = 'Fácil';
      dom.cardModeBadge.style.color = '#10b981';
      dom.cardModeBadge.style.background = 'rgba(16, 185, 129, 0.15)';
      dom.cardModeBadge.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    } else if (mode === 'medium') {
      if (dom.modeMedium) {
        dom.modeMedium.classList.add('active');
        dom.modeMedium.setAttribute('aria-checked', 'true');
      }
      dom.cardModeBadge.textContent = 'Medio';
      dom.cardModeBadge.style.color = '#38bdf8';
      dom.cardModeBadge.style.background = 'rgba(56, 189, 248, 0.15)';
      dom.cardModeBadge.style.borderColor = 'rgba(56, 189, 248, 0.3)';
    } else {
      if (dom.modeHard) {
        dom.modeHard.classList.add('active');
        dom.modeHard.setAttribute('aria-checked', 'true');
      }
      dom.cardModeBadge.textContent = 'Difícil';
      dom.cardModeBadge.style.color = '#f59e0b';
      dom.cardModeBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      dom.cardModeBadge.style.borderColor = 'rgba(245, 158, 11, 0.3)';
    }

    updateModeDisplay();
  }

  function updateModeDisplay() {
    if (!state.currentWord) return;

    if (state.difficulty === 'easy') {
      // MODO FÁCIL: Solamente escribes el artículo. Plural y traducción visibles.
      dom.translationHintBox.style.display = 'inline-flex';
      dom.targetTranslationHint.textContent = state.currentWord.translation;

      // Plural visible y bloqueado
      dom.inputPlural.value = state.currentWord.plural;
      dom.inputPlural.setAttribute('readonly', 'true');
      dom.inputPlural.style.opacity = '0.75';
      dom.inputPlural.style.cursor = 'default';
      if (dom.pluralFieldHint) dom.pluralFieldHint.textContent = '(Visible en modo fácil)';

      // Traducción visible y bloqueada
      dom.inputTranslation.value = state.currentWord.translation;
      dom.inputTranslation.setAttribute('readonly', 'true');
      dom.inputTranslation.style.opacity = '0.75';
      dom.inputTranslation.style.cursor = 'default';
      dom.translationFieldHint.textContent = '(Visible en modo fácil)';
    } else if (state.difficulty === 'medium') {
      // MODO MEDIO: Escribes el artículo y el plural. Traducción visible.
      dom.translationHintBox.style.display = 'inline-flex';
      dom.targetTranslationHint.textContent = state.currentWord.translation;

      // Plural editable
      dom.inputPlural.value = '';
      dom.inputPlural.removeAttribute('readonly');
      dom.inputPlural.style.opacity = '1';
      dom.inputPlural.style.cursor = 'text';
      if (dom.pluralFieldHint) dom.pluralFieldHint.textContent = 'die + sustantivo';

      // Traducción visible y bloqueada
      dom.inputTranslation.value = state.currentWord.translation;
      dom.inputTranslation.setAttribute('readonly', 'true');
      dom.inputTranslation.style.opacity = '0.75';
      dom.inputTranslation.style.cursor = 'default';
      dom.translationFieldHint.textContent = '(Visible en modo medio)';
    } else {
      // MODO DIFÍCIL: Escribes todo (artículo, plural y traducción).
      dom.translationHintBox.style.display = 'none';
      dom.targetTranslationHint.textContent = '';

      // Plural editable
      dom.inputPlural.value = '';
      dom.inputPlural.removeAttribute('readonly');
      dom.inputPlural.style.opacity = '1';
      dom.inputPlural.style.cursor = 'text';
      if (dom.pluralFieldHint) dom.pluralFieldHint.textContent = 'die + sustantivo';

      // Traducción editable
      dom.inputTranslation.value = '';
      dom.inputTranslation.removeAttribute('readonly');
      dom.inputTranslation.style.opacity = '1';
      dom.inputTranslation.style.cursor = 'text';
      dom.translationFieldHint.textContent = '(Escribe en español)';
    }
  }

  // --- Normalización de Cadenas de Texto ---
  function normalizeText(text) {
    if (!text) return '';
    return text
      .trim()
      .toLowerCase();
  }

  function stripSpanishArticles(text) {
    return text.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, '').trim();
  }

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  let lastCheckTime = 0;

  // --- Validación de Respuestas ---
  function checkAnswers() {
    if (state.isShowingCorrection) {
      return;
    }

    const now = Date.now();
    if (now - lastCheckTime < 150) {
      return;
    }
    lastCheckTime = now;

    if (state.evaluated) {
      // Si ya fue evaluado, el Enter avanza a la siguiente palabra
      loadWord(state.currentIndex + 1);
      return;
    }

    const current = state.currentWord;
    const userArticle = normalizeText(dom.inputArticle.value);
    
    // Plural: Aceptar si el usuario escribió solo el sustantivo (ej. "Hunde") o "die Hunde"
    let userPlural = normalizeText(dom.inputPlural.value);
    userPlural = userPlural.replace(/^die\s+/i, '').trim();

    const expectedArticle = normalizeText(current.article);
    const expectedPlural = normalizeText(current.plural);

    // Validación Artículo (siempre requerida en los 3 modos)
    const articleValid = userArticle === expectedArticle;

    // Validación Plural:
    // En 'easy', está dado/visible, por lo que se considera válido automáticamente
    let pluralValid = true;
    if (state.difficulty === 'medium' || state.difficulty === 'hard') {
      pluralValid = userPlural === expectedPlural;
    }

    // Validación Traducción:
    // Solo en 'hard' se exige escribirla; en 'easy' y 'medium' está visible
    let translationValid = true;
    let userTranslation = '';
    if (state.difficulty === 'hard') {
      userTranslation = normalizeText(dom.inputTranslation.value);
      const userClean = stripSpanishArticles(userTranslation);
      const userCleanNoAccents = removeAccents(userClean);

      // Comprobar contra la traducción principal y sinónimos aceptados
      const candidates = [
        current.translation,
        ...(current.acceptedTranslations || [])
      ].map(t => normalizeText(t));

      translationValid = candidates.some(cand => {
        const candClean = stripSpanishArticles(cand);
        return (
          userTranslation === cand ||
          userClean === candClean ||
          userCleanNoAccents === removeAccents(candClean)
        );
      });
    }

    const isAllCorrect = articleValid && pluralValid && translationValid;

    // Resaltar campos individuales según el modo activo
    setInputValidationState(dom.inputArticle, articleValid);
    if (state.difficulty === 'medium' || state.difficulty === 'hard') {
      setInputValidationState(dom.inputPlural, pluralValid);
    }
    if (state.difficulty === 'hard') {
      setInputValidationState(dom.inputTranslation, translationValid);
    }

    // Actualizar Estadísticas
    state.stats.total += 1;
    if (isAllCorrect) {
      state.stats.correct += 1;
      state.stats.streak += 1;
      state.mistakes.delete(current.id);
    } else {
      state.stats.streak = 0;
      state.mistakes.add(current.id);
    }
    updateStatsDisplay();

    const details = {
      articleValid,
      pluralValid,
      translationValid,
      expectedArticle: current.article,
      expectedPlural: current.plural,
      expectedTranslation: current.translation,
      userArticle: dom.inputArticle.value.trim(),
      userPlural: dom.inputPlural.value.trim(),
      userTranslation: dom.inputTranslation.value.trim()
    };

    // Retroalimentación visual y auditiva
    displayFeedback(isAllCorrect, details);

    if (!isAllCorrect) {
      state.evaluated = false;
      // Mostrar cartel con la solución correcta antes de pasar a la siguiente palabra
      showCorrectionModal(current, details);
    } else {
      state.evaluated = true;
      // Modificar botón a "Siguiente palabra"
      dom.btnSubmit.className = 'btn-primary btn-next';
      dom.btnSubmitIcon.textContent = '➔';
      dom.btnSubmitText.textContent = 'Siguiente palabra';
      dom.btnSubmit.focus();
    }
  }

  function setInputValidationState(input, isValid) {
    input.classList.remove('is-valid', 'is-invalid');
    input.classList.add(isValid ? 'is-valid' : 'is-invalid');
  }

  function clearInputStates() {
    [dom.inputArticle, dom.inputPlural, dom.inputTranslation].forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });
  }

  // --- Mostrar Retroalimentación ---
  function displayFeedback(isCorrect, details) {
    dom.feedbackBox.className = 'feedback-box visible';

    if (isCorrect) {
      dom.feedbackBox.classList.add('success');
      soundManager.playSuccess();

      // Celebración si hay racha notable
      if (state.stats.streak > 0 && state.stats.streak % 5 === 0) {
        soundManager.playStreak();
      }

      const genderClass = `color-${details.expectedArticle}`;
      dom.feedbackHeader.innerHTML = `<span>🎉 ¡Excelente! Respuesta 100% correcta</span>`;
      dom.feedbackDetails.innerHTML = `
        <div style="font-size: 1.05rem; margin-top: 0.25rem;">
          <span class="${genderClass}">${details.expectedArticle}</span> 
          <strong>${state.currentWord.noun}</strong>, 
          <span>die ${details.expectedPlural}</span> 
          <em style="color: var(--text-secondary);">(${state.currentWord.translation})</em>
        </div>
      `;
    } else {
      dom.feedbackBox.classList.add('error');
      dom.practiceCard.classList.add('shake');
      setTimeout(() => dom.practiceCard.classList.remove('shake'), 400);
      soundManager.playError();

      dom.feedbackHeader.innerHTML = `<span>⚠️ Revisa la solución correcta:</span>`;

      const genderClass = `color-${details.expectedArticle}`;
      let breakdownHtml = `
        <div class="answer-comparison">
          <div class="comparison-item">
            <span class="comparison-label">Artículo:</span>
            <span class="comparison-correct ${genderClass}">${details.expectedArticle}</span>
            ${!details.articleValid ? `<span class="comparison-user">Tú: ${details.userArticle || '—'}</span>` : '<span style="color:#10b981;">✓</span>'}
          </div>
          <div class="comparison-item">
            <span class="comparison-label">Plural:</span>
            <span class="comparison-correct">die ${details.expectedPlural}</span>
            ${!details.pluralValid ? `<span class="comparison-user">Tú: ${details.userPlural || '—'}</span>` : '<span style="color:#10b981;">✓</span>'}
          </div>
      `;

      if (state.difficulty === 'challenge') {
        breakdownHtml += `
          <div class="comparison-item">
            <span class="comparison-label">Traducción:</span>
            <span class="comparison-correct">${details.expectedTranslation}</span>
            ${!details.translationValid ? `<span class="comparison-user">Tú: ${details.userTranslation || '—'}</span>` : '<span style="color:#10b981;">✓</span>'}
          </div>
        `;
      }

      breakdownHtml += `</div>`;
      dom.feedbackDetails.innerHTML = breakdownHtml;
    }
  }

  // --- Cartel de Solución Correcta (Modal ante Error) ---
  function showCorrectionModal(word, details) {
    if (!word) return;
    state.isShowingCorrection = true;
    state.correctionOpenedAt = Date.now();

    // Desenfocar cualquier input activo para evitar eventos fantasma de teclado
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }

    // Encabezado de la palabra en grande
    dom.corrHeroNoun.textContent = word.noun;
    dom.corrHeroArticle.textContent = word.article;
    dom.corrHeroArticle.className = `hero-article color-${word.article}`;
    dom.corrHeroTranslation.textContent = word.translation;
    dom.corrCatBadge.textContent = word.category || 'Sustantivo';
    dom.corrLevelBadge.textContent = word.level || 'A1';

    // Desglose de Artículo
    dom.corrValArticle.textContent = word.article;
    dom.corrValArticle.className = `solution-correct-val color-${word.article}`;
    if (details.articleValid) {
      dom.cardArticle.className = 'solution-card is-correct';
      dom.statusIconArticle.textContent = '✅';
      dom.corrUserArticle.innerHTML = `<span class="correct-text">¡Correcto!</span>`;
    } else {
      dom.cardArticle.className = 'solution-card is-wrong';
      dom.statusIconArticle.textContent = '❌';
      const userText = details.userArticle ? escapeHtml(details.userArticle) : 'vacío';
      dom.corrUserArticle.innerHTML = `Escribiste: <span class="wrong-text">${userText}</span>`;
    }

    // Desglose de Plural
    dom.corrValPlural.textContent = `die ${word.plural}`;
    if (state.difficulty === 'easy') {
      dom.cardPlural.className = 'solution-card is-correct';
      dom.statusIconPlural.textContent = 'ℹ️';
      dom.corrUserPlural.innerHTML = `<span class="correct-text">Visible en modo fácil</span>`;
    } else if (details.pluralValid) {
      dom.cardPlural.className = 'solution-card is-correct';
      dom.statusIconPlural.textContent = '✅';
      dom.corrUserPlural.innerHTML = `<span class="correct-text">¡Correcto!</span>`;
    } else {
      dom.cardPlural.className = 'solution-card is-wrong';
      dom.statusIconPlural.textContent = '❌';
      const userText = details.userPlural ? `die ${escapeHtml(details.userPlural)}` : 'vacío';
      dom.corrUserPlural.innerHTML = `Escribiste: <span class="wrong-text">${userText}</span>`;
    }

    // Desglose de Traducción
    dom.corrValTrans.textContent = word.translation;
    if (state.difficulty === 'easy' || state.difficulty === 'medium') {
      dom.cardTrans.className = 'solution-card is-correct';
      dom.statusIconTrans.textContent = 'ℹ️';
      dom.corrUserTrans.innerHTML = `<span class="correct-text">Visible en modo ${state.difficulty === 'easy' ? 'fácil' : 'medio'}</span>`;
    } else if (details.translationValid) {
      dom.cardTrans.className = 'solution-card is-correct';
      dom.statusIconTrans.textContent = '✅';
      dom.corrUserTrans.innerHTML = `<span class="correct-text">¡Correcto!</span>`;
    } else {
      dom.cardTrans.className = 'solution-card is-wrong';
      dom.statusIconTrans.textContent = '❌';
      const userText = details.userTranslation ? escapeHtml(details.userTranslation) : 'vacío';
      dom.corrUserTrans.innerHTML = `Escribiste: <span class="wrong-text">${userText}</span>`;
    }

    // Abrir modal y enfocar el botón para continuar con Enter tras pequeña pausa
    dom.modalCorrection.classList.add('active');
    setTimeout(() => {
      if (state.isShowingCorrection && dom.btnContinueAfterError) {
        dom.btnContinueAfterError.focus();
      }
    }, 150);
  }

  function closeCorrectionAndAdvance(force = false) {
    if (!state.isShowingCorrection) return;
    // Si no es forzado, evitar que se cierre si pasaron menos de 350ms (por si Enter rebota)
    if (!force && Date.now() - state.correctionOpenedAt < 350) {
      return;
    }
    state.isShowingCorrection = false;
    state.correctionOpenedAt = 0;
    dom.modalCorrection.classList.remove('active');
    loadWord(state.currentIndex + 1);
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Actualizar Estadísticas ---
  function updateStatsDisplay() {
    dom.statStreak.textContent = state.stats.streak;
    dom.statCorrect.textContent = state.stats.correct;
    dom.statTotal.textContent = state.stats.total;

    const accuracy = state.stats.total > 0
      ? Math.round((state.stats.correct / state.stats.total) * 100)
      : 100;
    dom.statAccuracy.textContent = `${accuracy}%`;

    // Botón de repaso de fallos
    const mistakeCount = state.mistakes.size;
    dom.mistakesCount.textContent = mistakeCount;
    if (mistakeCount > 0) {
      dom.btnReviewMistakes.classList.add('visible');
    } else if (!state.isReviewingMistakes) {
      dom.btnReviewMistakes.classList.remove('visible');
    }
  }

  // --- Inserción de Caracteres Alemanes ---
  function insertCharacter(char) {
    const input = state.lastActiveInput || dom.inputPlural;
    if (!input || input.hasAttribute('readonly')) return;

    const start = input.selectionStart || input.value.length;
    const end = input.selectionEnd || input.value.length;
    const val = input.value;

    input.value = val.substring(0, start) + char + val.substring(end);
    input.focus();
    input.setSelectionRange(start + char.length, start + char.length);
  }

  // --- Explorador de Vocabulario ---
  function renderVocabModal(query = '') {
    const q = normalizeText(query);
    const filtered = GERMAN_NOUNS.filter(w => {
      if (!q) return true;
      return (
        w.noun.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.plural.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q)
      );
    });

    dom.modalVocabTotal.textContent = GERMAN_NOUNS.length;

    dom.vocabList.innerHTML = filtered.map(w => `
      <div class="vocab-item">
        <span class="v-article color-${w.article}">${w.article}</span>
        <strong>${w.noun}</strong>
        <span>die ${w.plural}</span>
        <span style="color: var(--text-secondary);">${w.translation}</span>
        <button type="button" class="vocab-speak-btn" data-audio="${w.article} ${w.noun}" title="Escuchar pronunciación alemana">🔊</button>
      </div>
    `).join('');

    dom.vocabList.querySelectorAll('.vocab-speak-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const term = btn.getAttribute('data-audio');
        if (term) soundManager.speak(term);
      });
    });
  }

  // --- Configuración de Eventos ---
  function setupEventListeners() {
    // Modos de dificultad (Fácil / Medio / Difícil)
    if (dom.modeEasy) dom.modeEasy.addEventListener('click', () => setDifficulty('easy'));
    if (dom.modeMedium) dom.modeMedium.addEventListener('click', () => setDifficulty('medium'));
    if (dom.modeHard) dom.modeHard.addEventListener('click', () => setDifficulty('hard'));

    // Filtros de categoría y nivel
    dom.categorySelect.addEventListener('change', (e) => {
      state.category = e.target.value;
      state.isReviewingMistakes = false;
      dom.btnReviewMistakes.classList.remove('active');
      buildDeck();
      loadWord(0);
    });

    dom.levelSelect.addEventListener('change', (e) => {
      state.level = e.target.value;
      state.isReviewingMistakes = false;
      dom.btnReviewMistakes.classList.remove('active');
      buildDeck();
      loadWord(0);
    });

    // Botón Repasar Fallos
    dom.btnReviewMistakes.addEventListener('click', () => {
      if (state.mistakes.size === 0) return;
      state.isReviewingMistakes = !state.isReviewingMistakes;
      dom.btnReviewMistakes.classList.toggle('active', state.isReviewingMistakes);
      buildDeck();
      loadWord(0);
    });

    // Botón Enviar / Siguiente
    dom.btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      checkAnswers();
    });
    dom.form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      checkAnswers();
    });

    // Botón Saltar palabra
    dom.btnSkip.addEventListener('click', () => {
      const current = state.currentWord;
      if (!current) return;
      state.stats.total += 1;
      state.stats.streak = 0;
      state.mistakes.add(current.id);
      updateStatsDisplay();

      const details = {
        articleValid: false,
        pluralValid: false,
        translationValid: false,
        expectedArticle: current.article,
        expectedPlural: current.plural,
        expectedTranslation: current.translation,
        userArticle: dom.inputArticle.value.trim(),
        userPlural: dom.inputPlural.value.trim(),
        userTranslation: dom.inputTranslation.value.trim()
      };
      displayFeedback(false, details);
      state.evaluated = false;
      showCorrectionModal(current, details);
    });

    // Botón Pronunciar
    dom.btnPronounce.addEventListener('click', () => {
      if (state.currentWord) {
        soundManager.speak(state.currentWord.noun);
      }
    });

    // Toggle Sonido
    dom.soundToggle.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundManager.enabled = state.soundEnabled;
      localStorage.setItem('wm_sound', state.soundEnabled);
      dom.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    });

    // Toggle Tema
    dom.themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('wm_theme', state.theme);
      dom.themeIcon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
    });

    // Botones rápidos de Artículo (der / die / das)
    dom.articleQuickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const art = btn.getAttribute('data-art');
        dom.inputArticle.value = art;
        dom.articleQuickBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (state.difficulty === 'easy') {
          dom.btnSubmit.focus();
        } else {
          dom.inputPlural.focus();
          state.lastActiveInput = dom.inputPlural;
        }
      });
    });

    // Botones virtuales de caracteres alemanes
    dom.umlautKeys.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        insertCharacter(btn.getAttribute('data-char'));
      });
    });

    // Rastrear el último input enfocado
    [dom.inputArticle, dom.inputPlural, dom.inputTranslation].forEach(input => {
      input.addEventListener('focus', () => {
        state.lastActiveInput = input;
      });
    });

    // Atajos de teclado numéricos (1=der, 2=die, 3=das) cuando el foco está en el artículo
    dom.inputArticle.addEventListener('keydown', (e) => {
      if (e.key === '1' || e.key === '2' || e.key === '3') {
        e.preventDefault();
        const map = { '1': 'der', '2': 'die', '3': 'das' };
        dom.inputArticle.value = map[e.key];
        dom.articleQuickBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-art') === map[e.key]);
        });
        if (state.difficulty === 'easy') {
          dom.btnSubmit.focus();
        } else {
          dom.inputPlural.focus();
          state.lastActiveInput = dom.inputPlural;
        }
      }
    });

    // Enter en cualquier input
    [dom.inputArticle, dom.inputPlural, dom.inputTranslation].forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          checkAnswers();
        }
      });
    });

    // Atajos globales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (state.isShowingCorrection) {
          e.preventDefault();
          e.stopPropagation();
          // Ignorar si el modal acaba de abrirse (protección contra rebote o propagación de tecla)
          if (Date.now() - state.correctionOpenedAt < 350) {
            return;
          }
          closeCorrectionAndAdvance(true);
          return;
        }
        if (state.evaluated) {
          e.preventDefault();
          e.stopPropagation();
          loadWord(state.currentIndex + 1);
          return;
        }
      }
      // Escape cierra modales
      if (e.key === 'Escape') {
        if (state.isShowingCorrection) {
          closeCorrectionAndAdvance(true);
        }
        dom.modalVocab.classList.remove('active');
      }
    });

    // Modal de Corrección
    dom.btnContinueAfterError.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeCorrectionAndAdvance(true);
    });
    dom.btnCloseCorrection.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeCorrectionAndAdvance(true);
    });
    dom.corrBtnSpeak.addEventListener('click', () => {
      if (state.currentWord) {
        soundManager.speak(`${state.currentWord.article} ${state.currentWord.noun}`);
      }
    });

    // Modal de Vocabulario
    dom.btnVocabModal.addEventListener('click', () => {
      dom.modalVocab.classList.add('active');
      dom.vocabSearch.focus();
    });

    dom.closeModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-modal');
        if (id === 'modal-correction') {
          closeCorrectionAndAdvance(true);
        } else {
          const m = document.getElementById(id);
          if (m) m.classList.remove('active');
        }
      });
    });

    // Cerrar modal al hacer click fuera del contenido
    [dom.modalCorrection, dom.modalVocab].forEach(modal => {
      if (!modal) return;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          if (modal === dom.modalCorrection) {
            closeCorrectionAndAdvance(true);
          } else {
            modal.classList.remove('active');
          }
        }
      });
    });

    // Búsqueda en el modal de vocabulario
    dom.vocabSearch.addEventListener('input', (e) => {
      renderVocabModal(e.target.value);
    });
  }

  // Iniciar la app al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
