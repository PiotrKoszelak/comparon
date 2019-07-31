import { combineReducers } from "redux";
import { offers, selectedOffer, numberSelectedOffers, numberOffersToComapre} from "./offer";
import { operators, selectedOperator } from "./operator";
import { cities, selectedCity } from "./city";
import { periods, selectedPeriod } from "./period";
import { types, selectedType } from "./type";
import { selectedPrice} from "./price";
import { selectedSpeed } from "./speed";
import { isDetailOpen, details } from "./detail";
import { contact } from "./contact";

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
  selectedPrice,
  selectedSpeed,
  selectedOffer,
  isDetailOpen,
  details,
  contact,
  numberSelectedOffers,
  numberOffersToComapre
});