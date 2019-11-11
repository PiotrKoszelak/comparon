import { combineReducers } from "redux";
import { offers, selectedOffer, numberSelectedOffers, offersToCompare, sortType} from "./offers/offer";
import { operators, selectedOperator } from "./offers/operator";
import { cities, selectedCity } from "./offers/city";
import { periods, selectedPeriod } from "./offers/period";
import { types, selectedType } from "./offers/type";
import { selectedPrice} from "./offers/price";
import { selectedSpeed } from "./offers/speed";
import { isDetailOpen } from "./offers/detail";
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
  numberSelectedOffers,
  offersToCompare,
  maxParam,
  language,
  sortType
});