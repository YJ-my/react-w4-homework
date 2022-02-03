//combineReducers : 리듀서를 묶는 함수

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dict from "./modules/dict";
import thunk from "redux-thunk";

//미들웨어 추가
const middlewares = [thunk];
const rootReducer = combineReducers({dict});
//리듀서 말고 옵셔널하게 추가하는 애들의 모음
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;