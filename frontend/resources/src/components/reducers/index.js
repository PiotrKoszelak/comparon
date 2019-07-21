import { combineReducers } from "redux";
import { offer, selectedOffer, offerPrice, offerOperator, offerPeriod, offerSpeed, offerType} from "./offer";
import { operators, operator } from "./operator";
import { cities, city } from "./city";
import { periods, period } from "./period";
import { types, typ } from "./type";
import { price } from "./price";
import { isDetailOpen } from "./detail";

export default combineReducers({
  offer,
  operator,
  operators,
  cities,
  city,
  periods,
  period,
  types,
  typ,
  price,
  selectedOffer,
  isDetailOpen,
  offerPrice,
  offerOperator,
  offerPeriod,
  offerSpeed,
  offerType
});