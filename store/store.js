import { createStore, combineReducers } from "redux";
import mealsReducers from "./reducers/meals";

const rootReducers = combineReducers({
  meals: mealsReducers
});

const store = createStore(rootReducers);

export default store;
