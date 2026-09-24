/**
 * WortBlitz ⚡ - Sistema de Sonido y Pronunciación Nativa en Alemán
 * 
 * Incluye:
 * 1. Pronunciación en alemán nativo auténtico (alta fidelidad vía Google Neural German TTS).
 * 2. Fallback inteligente a Web Speech API con detección prioritaria de voces alemanas.
 * 3. Efectos de sonido sintetizados en tiempo real con Web Audio API (aciertos, fallos, rachas).
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.currentAudio = null;
    this.audioCache = new Map();
    this.initVoices();
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if (!('speechSynthesis' in window)) return;
    const loadVoices = () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
      }
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Encuentra la mejor voz alemana disponible en el sistema.
   * Evita estrictamente usar voces en inglés para texto en alemán.
   */
  getBestGermanVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;

    // Buscar voces que pertenezcan a la familia del idioma alemán (de-DE, de-AT, de-CH, de)
    const deVoices = voices.filter(v => {
      const lang = (v.lang || '').toLowerCase().replace('_', '-');
      return lang.startsWith('de');
    });

    if (deVoices.length > 0) {
      // Priorizar voces alemanas neuronales / naturales / Google Deutsch
      return (
        deVoices.find(v => /google|natural|online|neural|katja|stefan|hedda|marlene/i.test(v.name)) ||
        deVoices.find(v => (v.lang || '').toLowerCase() === 'de-de') ||
        deVoices[0]
      );
    }
    return null;
  }

  /**
   * Pronuncia un término en alemán nativo garantizado.
   * Usa audio nativo real para evitar que motores de Windows sin paquete alemán
   * lo lean con acento inglés.
   */
  speak(text) {
    if (!this.enabled || !text) return;
    const cleanText = text.trim();
    if (!cleanText) return;

    this.stopSpeaking();

    // 1. Motor principal: Audio alemán nativo de alta fidelidad (audio/mpeg)
    const encoded = encodeURIComponent(cleanText);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=${encoded}`;

    try {
      let audio = this.audioCache.get(cleanText);
      if (!audio) {
        audio = new Audio(audioUrl);
        this.audioCache.set(cleanText, audio);
      } else {
        audio.currentTime = 0;
      }

      this.currentAudio = audio;

      let fallbackTriggered = false;
      const doFallback = () => {
        if (!fallbackTriggered) {
          fallbackTriggered = true;
          this.speakWithSpeechSynthesis(cleanText);
        }
      };

      audio.onerror = () => {
        doFallback();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          doFallback();
        });
      }
    } catch (err) {
      this.speakWithSpeechSynthesis(cleanText);
    }
  }

  /**
   * Fallback local a SpeechSynthesis con verificación rigurosa de voz alemana.
   */
  speakWithSpeechSynthesis(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.88; // Ritmo didáctico y natural

      const germanVoice = this.getBestGermanVoice();
      if (germanVoice) {
        utterance.voice = germanVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("SpeechSynthesis error:", e);
    }
  }

  stopSpeaking() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  // --- Efectos de Sonido Sintetizados (Web Audio API) ---

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25); // C6

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  }

  playError() {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.25);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  }

  playStreak() {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5 E5 G5 C6 E6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.001, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.25);
      });
    } catch (e) {
      console.warn("Streak sound error:", e);
    }
  }
}

const soundManager = new SoundController();
