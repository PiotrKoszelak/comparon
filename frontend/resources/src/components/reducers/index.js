import { combineReducers } from "redux";
import { offer } from "./offer";
import { operators, operator } from "./operator";
import { cities, city } from "./city";

export default combineReducers({
  offer,
  operator,
  operators,
  cities,
  city
});