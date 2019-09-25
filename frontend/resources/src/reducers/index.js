import { combineReducers } from "redux";
import { offers, selectedOffer, numberSelectedOffers, numberOffersToCompare, sortType} from "./offers/offer";
import { operators, selectedOperator } from "./offers/operator";
import { cities, selectedCity } from "./offers/city";
import { periods, selectedPeriod } from "./offers/period";
import { types, selectedType } from "./offers/type";
import { selectedPrice} from "./offers/price";
import { selectedSpeed } from "./offers/speed";
import { isDetailOpen, details } from "./offers/detail";
import { contact } from "./offers/contact";
import { maxParam } from "./offers/maxParam";
import { language } from "./general/language";

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
  numberOffersToCompare,
  maxParam,
  language,
  sortType
});