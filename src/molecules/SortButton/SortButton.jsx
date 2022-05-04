import { Button } from "atoms/Button/Button";
import React, { useState } from "react";

import s from "./styles.module.scss";

export const SortButton = ({ modalWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const getBorderStyle = () => {
    if (activeSort === 0) {
      return 0;
    } else if (activeSort === 1) {
      return 33;
    } else {
      return 66;
    }
  };
  const onClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div style={{ position: "relative" }}>
      <Button variant="card" onClick={onClick} style={{ height: "100%" }}>
        Sort
      </Button>
      {isOpen && (
        <div className={s.modal} style={{ width: `${modalWidth}px` }}>
          <ul className={s.sortList}>
            <li className={s.sortListItem} onClick={() => setActiveSort(0)}>
              User
            </li>
            <li className={s.sortListItem} onClick={() => setActiveSort(1)}>
              By date
            </li>
            <li className={s.sortListItem} onClick={() => setActiveSort(2)}>
              By title
            </li>
          </ul>
          <hr className={s.border} style={{ left: `${getBorderStyle()}%` }} />
        </div>
      )}
    </div>
  );
};
