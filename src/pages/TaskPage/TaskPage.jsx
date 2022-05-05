import React from "react";
import { useDispatch } from "react-redux";

import s from "./styles.module.scss";

import { EditableTitle } from "atoms/EditableTitle/EditableTitle";
import { DeadlineChanger } from "molecules/DeadlineChanger/DeadlineChanger";
import { MicroTasksList } from "organisms/MicroTasksList/MicroTasksList";
import { useGetCurrentTaskPage } from "model/hooks/useGetCurrentTaskPage";
import { useHotKeyListener } from "model/hooks/useHotKeyListener";
import { useGetMicroTasks } from "model/hooks/useGetMicroTasks";
import {
  addMicroList,
  addMicroText,
} from "model/store/microTasks/actionCreators";
import { Button } from "atoms/Button/Button";
import { useNavigate } from "react-router-dom";

export const TaskPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTaskPage = useGetCurrentTaskPage();
  const currentMicroTasks = useGetMicroTasks(currentTaskPage?.id);
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
  const onGoBack = () => {
    navigate("/");
  };

  if (!currentTaskPage) {
    return null;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <header className={s.header}>
          <div className={[s.headerButtonsLeft, s.headerButtons].join(" ")}>
            <Button variant="card" className={s.backButton} onClick={onGoBack}>
              Back
            </Button>
          </div>
          <div className={s.headerTitleContainer}>
            <EditableTitle
              value={currentTaskPage.title}
              pageId={currentTaskPage.id}
            />
          </div>
          <div className={[s.headerButtonsRight, s.headerButtons].join(" ")}>
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
            <Button
              className={[s.button, s.button_left].join(" ")}
              onClick={createList}>
              Add list
            </Button>
            <Button
              className={[s.button, s.button_right].join(" ")}
              onClick={createTextarea}>
              Add text
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
