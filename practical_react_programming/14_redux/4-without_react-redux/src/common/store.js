import { crateStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);
// chrome에서 extension 사용 시 입력
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__
);
export default store;
