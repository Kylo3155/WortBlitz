# WortBlitz ⚡🇩🇪 - Práctica de Sustantivos en Alemán

Una aplicación web moderna, interactiva y responsiva diseñada para dominar el género (**der**, **die**, **das**), la **forma plural** y la **traducción** de los 200 sustantivos más usados en alemán (niveles A1 y A2 oficiales).

## ✨ Características

- 🧠 **Tres niveles de dificultad**:
  - 🟢 **Modo Fácil**: Solo escribes el artículo (`der`/`die`/`das`). El plural y la traducción están visibles en sus campos como referencia.
  - 🔵 **Modo Medio**: Escribes el artículo y la traducción en español. El plural está visible como referencia.
  - 🟠 **Modo Difícil**: Escribes todo (artículo, forma plural y traducción en español).
- ⚡ **Teclado de caracteres alemanes integrado**: Botones rápidos para insertar `ä`, `ö`, `ü`, `ß`, `Ä`, `Ö`, `Ü` en cualquier teclado.
- 🎯 **Atajos rápidos de artículo**: Botones dedicados o teclas `[1] der`, `[2] die`, `[3] das`.
- 🔊 **Audio y pronunciación nativa**:
  - Pronunciación en voz alemana nativa mediante la Web Speech API (`SpeechSynthesis`).
  - Efectos de sonido sintetizados con la Web Audio API (sin descargas de archivos externos).
- 📊 **Estadísticas en tiempo real**: Contador de racha actual, aciertos, precisión porcentual y total practicado.
- ⚠️ **Modo repaso de fallos**: Guarda automáticamente las palabras falladas en la sesión para repasarlas individualmente.
- 🌓 **Tema Oscuro y Claro**: Diseño adaptativo con estética moderna, sombras suaves y contrastes optimizados.
- 📚 **Explorador de vocabulario**: Buscador con los 200 sustantivos categorizados por temática y nivel (A1 / A2).

---

## 🚀 Despliegue en Vercel (Gratis y en 2 minutos)

Este proyecto está preparado para desplegarse como un sitio estático en [Vercel](https://vercel.com) con **cero configuración**.

### Opción 1: Conectar con GitHub (Recomendado)
1. Sube este proyecto a tu cuenta de [GitHub](https://github.com):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - WortBlitz"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New..."** -> **"Project"**.
4. Selecciona tu repositorio recién creado.
5. Vercel detectará el archivo `index.html` automáticamente. No necesitas modificar ningún comando de compilación (`Build Command: None`, `Output Directory: ./`).
6. Haz clic en **"Deploy"**. En segundos tendrás una URL en vivo (ej. `wortblitz.vercel.app`) con certificado SSL automático.

### Opción 2: Usando Vercel CLI
Si tienes Node.js en tu equipo, puedes desplegar directamente desde la terminal:
```bash
npx vercel
```
Sigue las indicaciones en pantalla y tu sitio se publicará inmediatamente.

---

## 💻 Uso Local

Para probarlo localmente en tu computadora:
1. Haz doble clic en el archivo `index.html` para abrirlo directamente en Google Chrome, Edge o Firefox.
2. O bien, si tienes cualquier servidor local de desarrollo (Live Server de VS Code, Python, etc.), puedes servirlo en el puerto local de tu preferencia.

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|---|---|
| `Enter` | Verificar respuesta / Avanzar a la siguiente palabra |
| `Tab` | Moverse al siguiente campo de texto |
| `1` | Rellenar automáticamente con `der` y pasar al plural |
| `2` | Rellenar automáticamente con `die` y pasar al plural |
| `3` | Rellenar automáticamente con `das` y pasar al plural |
| `Esc` | Cerrar ventanas modales abiertas |
