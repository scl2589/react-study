import produce from "immer";

function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
