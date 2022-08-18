import { createStore } from "react-redux";
import { counterReducer } from "./Reducer";
const store = createStore(counterReducer)
export default store;