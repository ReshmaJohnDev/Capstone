import React from "react";
import {languages }from "./languages"

export default function AssemblyEndgame() {

const languageElements = languages.map(chip => {
        const style = {
        backgroundColor :chip.backgroundColor,
        color : chip.color
        }
    return(<span style = {style} className = "chip">{chip.name}</span>)
    })
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
        <section className="language_chip">
            {languageElements}
      </section>
    </main>
  );
}
