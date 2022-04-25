import React from "react";
import { useDispatch } from "react-redux";

import s from "./styles.module.scss";

import { EditableTitle } from "atoms/EditableTitle/EditableTitle";
import { DeadlineChanger } from "molecules/DeadlineChanger/DeadlineChanger";
import { MicroTasksList } from "organisms/MicroTasksList/MicroTasksList";
import { useGetCurrentMicroTasks } from "model/hooks/useGetCurrentMicroTasks";
import { useGetCurrentTaskPage } from "model/hooks/useGetCurrentTaskPage";
import { useHotKeyListener } from "model/hooks/useHotKeyListener";
import {
  addMicroList,
  addMicroText,
} from "model/store/microTasks/actionCreators";

export const TaskPage = () => {
  const dispatch = useDispatch();
  const currentTaskPage = useGetCurrentTaskPage();
  const currentMicroTasks = useGetCurrentMicroTasks(currentTaskPage?.id);
  useHotKeyListener(currentTaskPage?.id);

  const createList = () => {
    dispatch(
      addMicroList({
        pageId: currentTaskPage.id,
        value: "",
      })
    );
  };
  const createTextarea = () => {
    dispatch(
      addMicroText({
        pageId: currentTaskPage.id,
        value: "",
      })
    );
  };

  if (!currentTaskPage) {
    return null;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <header className={s.header}>
          <div className={s.headerTitleContainer}>
            <EditableTitle
              value={currentTaskPage.title}
              pageId={currentTaskPage.id}
            />
          </div>
          <div className={s.headerButtonsContainer}>
            <DeadlineChanger
              deadline={currentTaskPage.deadline}
              taskId={currentTaskPage.id}
            />
          </div>
        </header>
        <div className={s.main}>
          <MicroTasksList
            currentMicroTasks={currentMicroTasks}
            currentPageId={currentTaskPage.id}
          />
          <div className={s.buttonsGroup}>
            <button
              className={[s.button, s.button_left].join(" ")}
              onClick={createList}>
              Add list
            </button>
            <button
              className={[s.button, s.button_right].join(" ")}
              onClick={createTextarea}>
              Add text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
