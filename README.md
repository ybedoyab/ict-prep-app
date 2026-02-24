# 🏆 Huawei ICT Competition Prep App

A React-based quiz application for practicing **Huawei ICT Competition** questions across multiple exam phases.

## Features

- 📝 **180+ questions** across multiple phases (Preliminary 2024-2025, 2023-2024, 2025-2026 Pre Test, Kunpeng, Preliminary Exam 2025-2026)
- 👥 **Multi-user** profiles with localStorage persistence
- 📊 **Progress tracking** per phase (correct answers, completion %)
- 🚩 **Flag/bookmark** questions for review
- 🔀 **Free navigation** — jump to any question via side panel or bottom grid
- 🎯 **Question types**: Single choice, multiple choice, and true/false
- 🎨 **Huawei-themed UI** with Tailwind CSS v4

## Tech Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Quiz.tsx          # Quiz interface with navigation & flagging
│   ├── Dashboard.tsx     # Phase selection & progress overview
│   └── UserSelection.tsx # User profile management
├── data/
│   ├── types.ts          # Question interface
│   ├── index.ts          # Aggregated question exports
│   └── q_*.ts            # Question data files by phase
├── hooks/
│   └── useStore.ts       # State management (localStorage)
├── App.tsx               # Main app routing
└── index.css             # Tailwind theme & component styles
```
