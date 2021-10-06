import React, { useEffect, useReducer } from "react";
import store from "./../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList.js";

export default function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    const prevTimelines = store.getState().timeline.timlines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log("TimelineMain render");
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
