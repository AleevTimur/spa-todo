import { addMicroList } from "model/store/microTasks/actionCreators";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useHotKeyListener = (currentTaskPageId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const starKeyListener = function (e) {
      if (e.key === "*") {
        e.preventDefault();
        dispatch(
          addMicroList({
            pageId: currentTaskPageId,
            value: "",
          })
        );
      }
    };
    window.addEventListener("keydown", starKeyListener);
    return () => window.removeEventListener("keydown", starKeyListener);
  });
};
