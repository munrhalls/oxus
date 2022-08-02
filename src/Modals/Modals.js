import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const Modals = ({ updateFlashcards, modalOpen }) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard updateFlashcards={updateFlashcards} />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteFlashcard" ? <div>DELETE MODAL</div> : ""}
      {modalOpen === "SortFlashcards" ? <div>SORT MODAL</div> : ""}
    </div>
  );
};
