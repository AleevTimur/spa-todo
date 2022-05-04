import { Button } from "atoms/Button/Button";
import React, { useState } from "react";

export const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div style={{ position: "relative" }}>
      <Button variant="card" onClick={onClick} style={{ height: "100%" }}>
        Sort
      </Button>
      {isOpen && (
        <div style={{ position: "absolute", top: 0, right: 0 }}>Something</div>
      )}
    </div>
  );
};
