import React from "react";
import PropTypes from "prop-types";

import s from "./styles.module.scss";

import { EditableListItem } from "atoms/EditableListItem/EditableListItem";
import { EditableTextarea } from "atoms/EditableTextarea/EditableTextarea";

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
              pageId={currentPageId}
            />
          )
        )}
    </div>
  );
};
MicroTasksList.propTypes = {
  currentMicroTasks: PropTypes.array,
  currentPageId: PropTypes.string.isRequired,
};
