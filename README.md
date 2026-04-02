# MockBoard — AI Interview Simulator
### Real-time voice interviews, CV analysis, honest scoring

---

## 🛠 Tech Stack

| Layer         | Technology                  | Why                                          |
|---------------|-----------------------------|----------------------------------------------|
| Framework     | **Next.js 14** (App Router) | Full-stack, SSR, easy API routes, Vercel deploy |
| UI            | **React 18**                | Component state, hooks, SPA-like UX          |
| AI            | **Anthropic Claude Sonnet** | Best-in-class reasoning + streaming support  |
| Streaming     | **Vercel AI / SSE**         | Word-by-word real-time text streaming        |
| Voice Input   | **Web Speech API**          | Built-in browser — no install needed         |
| Voice Output  | **Web Speech Synthesis**    | Built-in browser TTS — no install needed     |
| PDF Export    | **jsPDF**                   | Client-side PDF generation                  |
| Storage       | **localStorage**            | Session history, no DB needed for MVP        |
| Styling       | **Pure CSS**                | Custom variables, no Tailwind needed         |
| Fonts         | Google Fonts (Syne + DM Sans) | Loaded from CDN                            |

---

## 📦 Installation

### Prerequisites
- **Node.js** v18.17 or higher — https://nodejs.org
- **npm** v9+ (comes with Node) or **yarn**
- An **Anthropic API key** — https://console.anthropic.com

### Step 1 — Clone / create the project folder
```bash
# If you've downloaded the zip, just cd into it:
cd mockboard

# Or create fresh with Next.js:
npx create-next-app@14 mockboard --no-tailwind --src-dir=no --import-alias="@/*"
# Then replace files with the ones provided
```

### Step 2 — Install dependencies
```bash
npm install
```

This installs:
- `next` — Next.js framework
- `react` + `react-dom` — React
- `@anthropic-ai/sdk` — Official Anthropic SDK
- `jspdf` — PDF export

### Step 3 — Set up your API key
```bash
# Copy the example env file
cp .env.local.example .env.local

# Then open .env.local and paste your key:
# ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

> ⚠️ Never commit `.env.local` to git — it's in `.gitignore` by default.

### Step 4 — Run the app
```bash
npm run dev
```

Open **http://localhost:3000** in Chrome (Chrome required for voice input).

---

## 🎯 Features

| Feature                | Description                                              |
|------------------------|----------------------------------------------------------|
| 🎤 **Voice Input**     | Click mic → speak → click again to submit                |
| 🔊 **AI Voice Output** | AI speaks questions & feedback via TTS (real-time)       |
| 📄 **CV Upload**       | PDF or TXT — AI references your specific experience      |
| ⚡ **Streaming AI**    | Word-by-word streaming with live cursor                  |
| 📊 **4-Axis Scoring**  | Content, Structure, Confidence, Relevance (25pts each)   |
| 🎓 **Practice Mode**   | Coaching tone, no final score — safe to practice         |
| 📈 **Difficulty**      | Junior → Mid → Senior → Executive levels                 |
| 🗂 **Interview Types** | General / Behavioral / Technical / Case Study / HR       |
| 📑 **PDF Export**      | Full report with Q&A, scores, feedback                   |
| 📋 **Session History** | Saves last 30 sessions with score trend chart            |
| ⏱ **Timers**          | Session timer + per-answer timer                         |
| 🎙 **Voice Picker**    | Choose from all available English TTS voices             |

---

## 🚀 Deploying to Vercel (free)

```bash
npm install -g vercel
vercel

# Follow the prompts, then add your env variable:
# Go to Vercel Dashboard → Your Project → Settings → Environment Variables
# Add: ANTHROPIC_API_KEY = sk-ant-xxxxxxxxxxxxxxxx
```

---

## 🗂 File Structure

```
mockboard/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js      ← Secure streaming API (Anthropic key stays server-side)
│   ├── globals.css           ← All styles (~400 lines)
│   ├── layout.js             ← Root layout + fonts
│   └── page.jsx              ← Complete app (~600 lines, all screens)
├── public/                   ← Static assets
├── .env.local                ← Your API key (create from .env.local.example)
├── .env.local.example        ← Template
├── next.config.mjs           ← Next.js config
├── package.json              ← Dependencies
└── README.md                 ← This file
```

---

## 🧠 How It Works

1. **Intro screen** → User enters role, uploads CV (optional), selects difficulty/mode
2. **API call** → First message sent to `/api/chat` (Next.js API route)
3. **Server** → `route.js` calls Anthropic SDK with streaming enabled, pipes SSE back
4. **Client** → Reads SSE chunks in real time, updates chat bubble word-by-word
5. **TTS** → As text streams in, sentences are detected and queued for SpeechSynthesis
6. **Voice input** → SpeechRecognition fills the text input with live transcript
7. **Scoring** → After N questions, AI returns structured JSON scores → parsed → results screen
8. **PDF** → jsPDF generates a formatted report client-side, downloaded instantly

---

## 🔒 Security Notes

- The Anthropic API key lives in `.env.local` — never exposed to the browser
- All API calls go through the Next.js API route (`/api/chat`)
- Session history stored in localStorage — no external DB or user accounts

---

## ⚠️ Browser Requirements

| Feature          | Chrome | Firefox | Safari | Edge |
|------------------|--------|---------|--------|------|
| Voice Input      | ✅     | ❌      | ⚠️ partial | ✅ |
| AI Voice Output  | ✅     | ✅      | ✅     | ✅  |
| PDF Upload       | ✅     | ✅      | ✅     | ✅  |
| PDF Export       | ✅     | ✅      | ✅     | ✅  |

> **Best experience: Google Chrome** (full Web Speech API support)
