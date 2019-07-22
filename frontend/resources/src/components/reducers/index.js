import { combineReducers } from "redux";
import { offers, selectedOffer} from "./offer";
import { operators, selectedOperator } from "./operator";
import { cities, selectedCity } from "./city";
import { periods, selectedPeriod } from "./period";
import { types, selectedType } from "./type";
import { price, selectedPrice} from "./price";
import { isDetailOpen } from "./detail";

export default combineReducers({
  offers,
  operators,
  selectedOperator,
  cities,
  selectedCity,
  periods,
  selectedPeriod,
  types,
  selectedType,
  price,
  selectedPrice,
  selectedOffer,
  isDetailOpen,
});