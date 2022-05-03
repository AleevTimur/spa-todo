import { Reorder } from "framer-motion";
import { Task } from "molecules/Task/Task";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./styles.module.scss";

const { root, list } = s;

export const SearchList = ({ searchValue }) => {
  const allTasks = useSelector((state) => state.mainTasks.list);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  useEffect(() => {
    setFilteredTasks(
      allTasks.filter((task) => task.title.toLowerCase().includes(searchValue))
    );
  }, [searchValue]);

  return (
    <div className={root}>
      <Reorder.Group
        axis="y"
        values={filteredTasks}
        onReorder={setFilteredTasks}
        layoutScroll
        className={list}
        style={{ paddingTop: "15px" }}>
        {filteredTasks.map((task) => (
          <Task taskData={task} key={task.id} />
        ))}
      </Reorder.Group>
    </div>
  );
};
