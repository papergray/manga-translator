# 漫画 Manga Translator

> AI-powered manga translation for Android & Windows — translate Chinese, Japanese, and Korean manga into any language instantly.

<div align="center">

![GitHub release](https://img.shields.io/github/v/release/papergray/manga-translator?style=flat-square&color=d4a017)
![Android](https://img.shields.io/badge/Android-7.0%2B-green?style=flat-square&logo=android)
![Windows](https://img.shields.io/badge/Windows-10%2F11-blue?style=flat-square&logo=windows)
![License](https://img.shields.io/badge/license-MIT-gray?style=flat-square)

**[⬇ Download Latest Release](../../releases/latest)**

</div>

---

## What it does

Load any `.cbz` manga file and get back every page with the original text replaced by clean English (or any of 15 languages). The AI finds each speech bubble, erases the original characters, and renders translated text in authentic manga fonts — automatically.

---

## AI Engines

The app supports multiple AI backends. You can switch between them any time in Settings.

| Engine | Cost | Internet | Notes |
|--------|------|----------|-------|
| 📱 **On-Device** | Free forever | First download only | Runs local AI on your device — ~150MB download once, then fully offline |
| ✨ **Google Gemini** | Free (1,500/day) | Required | Best free cloud option — get key at [aistudio.google.com](https://aistudio.google.com) |
| 🤖 **Anthropic Claude** | Paid | Required | Powered by [Claude AI](https://anthropic.com) — excellent translation quality and context understanding. Get key at [console.anthropic.com](https://console.anthropic.com) |
| 🧠 **OpenAI GPT-4o** | Paid | Required | Get key at [platform.openai.com](https://platform.openai.com) |
| ⚡ **Mistral Pixtral** | Free tier | Required | Get key at [console.mistral.ai](https://console.mistral.ai) |

> **Why Claude?** Anthropic's Claude AI excels at understanding manga context, tone, and humor — producing translations that feel natural rather than literal. It correctly handles honorifics, sound effects, and character-specific speech patterns that simpler models miss.

---

## Features

- **Auto language detection** — works on Chinese (Simplified & Traditional), Japanese, Korean, and more
- **15 target languages** — English, Spanish, French, German, Portuguese, Japanese, Korean, Arabic, Russian, Hindi, Turkish, Thai, Vietnamese, Indonesian
- **Smart text erasing** — samples the exact bubble background color and paints over original characters cleanly
- **4 manga font styles** — Bangers, Comic Neue, Caveat (handwritten), Permanent Marker
- **Batch processing** — stitches multiple pages per API call to minimize rate limit issues
- **On-device memory controls** — Low / Medium / High RAM limits for the local AI model
- **Webtoon reader** — vertical scroll reader with adjustable width

---

## Download

Go to **[Releases](../../releases/latest)** and download the file for your platform:

| Platform | File |
|----------|------|
| 🤖 Android | `MangaTranslator-Android.apk` |
| 🪟 Windows (installer) | `MangaTranslator-Windows-Setup.exe` |
| 🪟 Windows (portable) | `MangaTranslator-Windows-Portable.exe` |

### Android
1. Download `MangaTranslator-Android.apk` to your phone
2. Open your Files app and tap the APK
3. If prompted, allow "Install from unknown sources"
4. Install and open the app

### Windows
- **Installer**: Run `MangaTranslator-Windows-Setup.exe` and follow the prompts. Creates a Start Menu shortcut.
- **Portable**: Just run `MangaTranslator-Windows-Portable.exe` — no installation needed, runs from anywhere.

---

## Getting Started

### Option A — On-Device (Recommended, completely free)
1. Open the app → select **On-Device (Offline)**
2. Tap **Save & Start**
3. Open a `.cbz` file — the first run downloads the translation model (~150MB), then it's fully offline forever

### Option B — Google Gemini (Free cloud)
1. Go to [aistudio.google.com](https://aistudio.google.com) and sign in with your Google account
2. Click **Get API Key** → **Create API key** → copy it
3. Open the app → select **Google Gemini** → paste your key

### Option C — Claude AI (Best quality)
1. Go to [console.anthropic.com](https://console.anthropic.com) and create an account
2. Go to **API Keys** → **Create Key** → copy it (`sk-ant-...`)
3. Open the app → select **Anthropic Claude** → paste your key

---

## How it works

```
CBZ file (ZIP of images)
        ↓
  Extract pages
        ↓
  Stitch 3–8 pages into one tall image (reduces API calls)
        ↓
  Send to AI (cloud or on-device)
        ↓
  AI returns bounding boxes + translations per text region
        ↓
  Remap coordinates back to individual pages
        ↓
  Paint over original text with sampled background color
        ↓
  Render translated text in manga font
        ↓
  Display in webtoon reader / save as JPG
```

---

## Building from source

### Android
```bash
cd manga-app-android
npm install
npm run build
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```

### Windows
```bash
cd manga-app-windows
npm install
npm run dist          # builds installer + portable EXE into /release
```

### Automated (GitHub Actions)
Push a version tag to trigger a full build and release:
```bash
git tag v1.0.0
git push origin v1.0.0
```
Both APK and EXE will be built automatically and attached to the GitHub Release.

---

## Tech stack

| | Android | Windows |
|-|---------|---------|
| UI | React + Vite | React + Vite |
| Shell | Capacitor | Electron |
| On-device OCR | Tesseract.js | Tesseract.js |
| On-device translation | Transformers.js (OPUS-MT) | Transformers.js (OPUS-MT) |
| Archive support | JSZip | JSZip |
| Fonts | Bangers, Caveat, Permanent Marker, Comic Neue | Same |

---

## License

MIT — free to use, modify, and distribute.
