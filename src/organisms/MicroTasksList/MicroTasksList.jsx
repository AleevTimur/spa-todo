import { EditableListItem } from "atoms/EditableListItem/EditableListItem";
import { EditableTextarea } from "atoms/EditableTextarea/Editabletextarea";
import React from "react";
import s from "./styles.module.scss";

export const MicroTasksList = ({ currentMicroTasks, currentPageId }) => {
  return (
    <div className={s.root}>
      {currentMicroTasks &&
        currentMicroTasks.map((microTask) =>
          microTask.tag === "listItem" ? (
            <EditableListItem
              defaultValue={microTask.value}
              taskId={microTask.id}
              key={microTask.id}
              pageId={currentPageId}
            />
          ) : (
            <EditableTextarea
              defaultValue={microTask.value}
              taskId={microTask.id}
              key={microTask.id}
            />
          )
        )}
    </div>
  );
};
