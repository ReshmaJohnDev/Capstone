import React from "react";
import { languages } from "./languages";
import { useState } from "react";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge:
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline
 *    effect on the box using `border-bottom`.
 */

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keyboardElement = alphabets.split("").map((alphabet, index) => {
    return (
      <button key={index} className="key">
        {alphabet.toUpperCase()}
      </button>
    );
  });

  const guessWord = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className="guess-letter">
        {letter.toUpperCase()}
      </span>
    );
  });

  const languageElements = languages.map((chip) => {
    const style = {
      backgroundColor: chip.backgroundColor,
      color: chip.color,
    };
    return (
      <span style={style} className="chip">
        {chip.name}
      </span>
    );
  });
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language_chip">{languageElements}</section>
      <section className="guess-word">{guessWord}</section>
      <section className="keyboard">{keyboardElement}</section>
    </main>
  );
}
