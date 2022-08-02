import React, { useState } from "react";

export const CompletedFlashcards = ({ sortedFlashcards }) => {
  const passCards = sortedFlashcards.filter((card) => card.difficulty === 0);
  return (
    <div className="CompletedFlashcards">
      <h3 className="CompletedFlashcards__title">
        COMPLETED CARDS:{" "}
        <span className="CompletedFlashcards__title__number">
          {passCards.length}
        </span>
      </h3>
      <div></div>
    </div>
  );
};
