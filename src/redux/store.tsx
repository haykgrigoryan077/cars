import { combineReducers, createStore } from "redux";
import { carsReducer, initialData } from "./cardReducer";

export const store = createStore(
  combineReducers({
    carsReducer: carsReducer,
  }),
//   {
//     carsReducer: initialData
//   }
);
