# Random Project

A modern Vite + React application featuring a sleek digital timer with real-time countdown functionality.

## Description

This project is a React-based digital timer application built with Vite for fast development and optimized builds. It provides an intuitive interface for starting, pausing, and resetting a precision timer with HH:MM:SS formatting.

## Features

- ⏱️ **Real-time Timer** — Displays elapsed time in HH:MM:SS format
- ▶️ **Start/Pause Controls** — Toggle timer execution with disabled state management
- 🔄 **Reset Function** — Clear timer and return to zero
- 🎨 **Modern UI** — Green retro-style display with dark background and glassmorphism effects
- 📱 **Responsive Design** — Vertically centered layout using flexbox
- ⚡ **Built with Vite** — Lightning-fast hot module replacement and optimized production builds

## Setup

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

- `npm run dev` — starts Vite dev server
- `npm run build` — builds for production
- `npm run preview` — preview built app

## Project Structure

```
src/
├── main.jsx           — React app entry point
├── App.jsx            — Main app component
├── index.css          — Global styles
└── DigitalTimer/
    ├── DigitalTimer.jsx  — Timer component with state management
    └── DigitalTimer.css  — Timer-specific styles
```
