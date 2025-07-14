# React Quiz Demo App

A dynamic, interactive quiz application built with React and Vite, featuring timed questions, randomized answer options, and a detailed results summary.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Concepts Practiced](#concepts-practiced)
- [What I Learned](#what-i-learned)
- [License](#license)

---

## Features

- **Timed Questions**: Each question has a countdown timer that advances automatically on timeout.  
- **Skip Functionality**: Users can skip questions, which are recorded separately.  
- **Randomized Answers**: Answer options are shuffled for each question using `useRef`.  
- **Progress Tracking**: Tracks and displays progress through the quiz.  
- **Interactive Feedback**: Immediate visual feedback on selected answers (correct, wrong, or skipped).  
- **Results Summary**: Detailed breakdown of correct, wrong, and skipped answers with percentages and a review list.  
- **Responsive Styling**: Styled with custom CSS including gradients, animations, and imported fonts.

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Peglo98/React-Quizz.git
   cd React-Quizz
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Run in development mode**  
   ```bash
   npm run dev
   ```
4. **Build for production**  
   ```bash
   npm run build
   ```

---

## Concepts Practiced

- **React Functional Components & Composition**  
  Breaking the UI into reusable parts: `Header`, `Quiz`, `Question`, `Answers`, `QuestionTimer`, and `Summary`.
- **React Hooks**  
  - `useState` for managing component state (user answers, timer).  
  - `useEffect` for side‑effects (timers and intervals) with proper cleanup.  
  - `useRef` to persist shuffled answer order and prevent re‑shuffles on re‑render.  
  - `useCallback` to memoize callback handlers (`onSelectAnswer`, `onSkipAnswer`).
- **Timer Logic & Side Effects**  
  Implementing countdowns that trigger both interval updates and timeouts to advance questions.
- **Conditional Rendering & Flow Control**  
  Switching between quiz view and summary view based on completion state.
- **List Rendering & Mapping**  
  Rendering dynamic lists of answers and summary items with `Array.map()`.
- **Asset Import & Styling**  
  Importing SVG/PNG assets in components and global CSS for fonts, backgrounds, and animations.
- **Static Data Management**  
  Importing and using a local `questions.js` data file to drive the quiz content.

---


---

## License

This project is licensed under the MIT License.
