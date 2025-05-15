# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Assembly: Endgame

Assembly: Endgame is a fun and interactive word-guessing game built with React. Players have eight attempts to guess a hidden programming-related word (e.g., "REACT"). Wrong guesses "erase" programming languages from a visual list and trigger a playful farewell message. Correct guesses reveal letters, and the game ends with a win or loss message.

Technologies Used

Frontend: React (with Hooks)

Styling: CSS (Flexbox, CSS pseudo-classes)

Utilities: clsx for conditional class names, nanoid for unique keys, react-confetti for celebration effect

Gameplay Instructions

On load, the game displays:

A list of programming languages ("chips").

A blank representation of the target word (e.g., \_ \_ \_ \_ \_).

An on-screen keyboard of letters A–Z.

Make a Guess:

Click a letter on the keyboard.

Correct Guess: The letter appears in the word slots, and the key turns green.

Wrong Guess: One language chip is visually "lost" (greyed out with a skull), an animated farewell message appears, and the key turns red.

Win Condition:

Reveal all letters in the word within 8 wrong guesses → "You win!" message and Confetti animation.

Lose Condition:

Accumulate 8 wrong guesses → "Game over!" message.

New Game:

Click the "New Game" button to reset the word, chips, and keyboard.
