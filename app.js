/**
 * WortMeister - Lógica Principal de la Aplicación
 */

(function () {
  'use strict';

  // --- Estado de la aplicación ---
  const state = {
    difficulty: 'practice', // 'practice' (traducción visible) | 'challenge' (traducción oculta)
    category: 'all',
    level: 'all',
    isReviewingMistakes: false,
    
    deck: [],
    currentIndex: 0,
    currentWord: null,
    evaluated: false,
    
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
    btnVercelModal: document.getElementById('btn-vercel-modal'),
    btnVocabModal: document.getElementById('btn-vocab-modal'),
    
    // Stats
    statStreak: document.getElementById('stat-streak'),
    statCorrect: document.getElementById('stat-correct'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statTotal: document.getElementById('stat-total'),

    // Difficulty & Filters
    modePractice: document.getElementById('mode-practice'),
    modeChallenge: document.getElementById('mode-challenge'),
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
    modalVercel: document.getElementById('modal-vercel'),
    modalVocab: document.getElementById('modal-vocab'),
    modalVocabTotal: document.getElementById('modal-vocab-total'),
    vocabSearch: document.getElementById('vocab-search'),
    vocabList: document.getElementById('vocab-list'),
    closeModalBtns: document.querySelectorAll('.close-modal')
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
    if (savedDifficulty === 'challenge') {
      setDifficulty('challenge');
    } else {
      setDifficulty('practice');
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

  // --- Manejo de Dificultades ---
  function setDifficulty(mode) {
    state.difficulty = mode;
    localStorage.setItem('wm_difficulty', mode);

    if (mode === 'practice') {
      dom.modePractice.classList.add('active');
      dom.modePractice.setAttribute('aria-checked', 'true');
      dom.modeChallenge.classList.remove('active');
      dom.modeChallenge.setAttribute('aria-checked', 'false');
      dom.cardModeBadge.textContent = 'Modo Práctica';
      dom.cardModeBadge.style.color = '#38bdf8';
      dom.cardModeBadge.style.background = 'rgba(56, 189, 248, 0.15)';
    } else {
      dom.modeChallenge.classList.add('active');
      dom.modeChallenge.setAttribute('aria-checked', 'true');
      dom.modePractice.classList.remove('active');
      dom.modePractice.setAttribute('aria-checked', 'false');
      dom.cardModeBadge.textContent = 'Modo Desafío';
      dom.cardModeBadge.style.color = '#f59e0b';
      dom.cardModeBadge.style.background = 'rgba(245, 158, 11, 0.15)';
    }

    updateModeDisplay();
  }

  function updateModeDisplay() {
    if (!state.currentWord) return;

    if (state.difficulty === 'practice') {
      // Dificultad 1: Traducción mostrada automáticamente
      dom.translationHintBox.style.display = 'inline-flex';
      dom.targetTranslationHint.textContent = state.currentWord.translation;

      // Campo de traducción auto-completado y de solo lectura
      dom.inputTranslation.value = state.currentWord.translation;
      dom.inputTranslation.setAttribute('readonly', 'true');
      dom.inputTranslation.style.opacity = '0.75';
      dom.inputTranslation.style.cursor = 'default';
      dom.translationFieldHint.textContent = '(Visible en modo práctica)';
    } else {
      // Dificultad 2: Traducción oculta, el usuario debe escribirla
      dom.translationHintBox.style.display = 'none';
      dom.targetTranslationHint.textContent = '';

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

  // --- Validación de Respuestas ---
  function checkAnswers() {
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

    // Validación Artículo
    const articleValid = userArticle === expectedArticle;

    // Validación Plural (tolerante a mayúsculas/minúsculas pero estricto en umlauts)
    const pluralValid = userPlural === expectedPlural;

    // Validación Traducción
    let translationValid = true;
    let userTranslation = '';
    if (state.difficulty === 'challenge') {
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

    // Resaltar campos individuales
    setInputValidationState(dom.inputArticle, articleValid);
    setInputValidationState(dom.inputPlural, pluralValid);
    if (state.difficulty === 'challenge') {
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

    // Retroalimentación visual y auditiva
    displayFeedback(isAllCorrect, {
      articleValid,
      pluralValid,
      translationValid,
      expectedArticle: current.article,
      expectedPlural: current.plural,
      expectedTranslation: current.translation,
      userArticle: dom.inputArticle.value.trim(),
      userPlural: dom.inputPlural.value.trim(),
      userTranslation: dom.inputTranslation.value.trim()
    });

    state.evaluated = true;

    // Modificar botón a "Siguiente palabra"
    dom.btnSubmit.className = 'btn-primary btn-next';
    dom.btnSubmitIcon.textContent = '➔';
    dom.btnSubmitText.textContent = 'Siguiente palabra';
    dom.btnSubmit.focus();
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
      </div>
    `).join('');
  }

  // --- Configuración de Eventos ---
  function setupEventListeners() {
    // Modo Práctica / Desafío
    dom.modePractice.addEventListener('click', () => setDifficulty('practice'));
    dom.modeChallenge.addEventListener('click', () => setDifficulty('challenge'));

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
    dom.btnSubmit.addEventListener('click', checkAnswers);
    dom.form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkAnswers();
    });

    // Botón Saltar palabra
    dom.btnSkip.addEventListener('click', () => {
      state.stats.total += 1;
      state.stats.streak = 0;
      state.mistakes.add(state.currentWord.id);
      updateStatsDisplay();
      loadWord(state.currentIndex + 1);
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
        dom.inputPlural.focus();
        state.lastActiveInput = dom.inputPlural;
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
      if (e.key === '1') {
        e.preventDefault();
        dom.inputArticle.value = 'der';
        dom.inputPlural.focus();
      } else if (e.key === '2') {
        e.preventDefault();
        dom.inputArticle.value = 'die';
        dom.inputPlural.focus();
      } else if (e.key === '3') {
        e.preventDefault();
        dom.inputArticle.value = 'das';
        dom.inputPlural.focus();
      }
    });

    // Enter en cualquier input
    [dom.inputArticle, dom.inputPlural, dom.inputTranslation].forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkAnswers();
        }
      });
    });

    // Atajos globales
    document.addEventListener('keydown', (e) => {
      // Enter para avanzar si ya está evaluado y el foco no está en un input
      if (e.key === 'Enter' && state.evaluated) {
        checkAnswers();
      }
      // Escape cierra modales
      if (e.key === 'Escape') {
        dom.modalVercel.classList.remove('active');
        dom.modalVocab.classList.remove('active');
      }
    });

    // Modales
    dom.btnVercelModal.addEventListener('click', () => {
      dom.modalVercel.classList.add('active');
    });

    dom.btnVocabModal.addEventListener('click', () => {
      dom.modalVocab.classList.add('active');
      dom.vocabSearch.focus();
    });

    dom.closeModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-modal');
        document.getElementById(id).classList.remove('active');
      });
    });

    // Cerrar modal al hacer click fuera del contenido
    [dom.modalVercel, dom.modalVocab].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
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
