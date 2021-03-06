
import { asyncReducerFactory } from '../HigherOrderReducer'
//offers
export const offers = asyncReducerFactory('OFFERS');

//selected offer id
export const selectedOffer = (state = null, action) => { 
  switch (action.type) { 
    case 'SELECT_OFFER':
      return action.selectedOffer;
      
    default:
      return state
  }
}

//number of selected offers
export const numberSelectedOffers = (state = null, action) => { 
  switch (action.type) { 
    case 'SET_NUMBER_SELECTED_OFFERS':
      return action.numberSelectedOffers;
      
    default:
      return state
  }
}

//number of offers to compare
export const offersToCompare = (state = [], action) => { 
  switch (action.type) { 
    case 'SET_OFFERS_TO_COMPARE':
      return action.offersToCompare;
      
    default:
      return state
  }
}

//selected sort type
export const sortType = (state = 1, action) => { 
  switch (action.type) { 
    case 'SET_SORT_TYPE':
      return action.sortType;
      
    default:
      return state
  }
}

//selected offer id
export const selectedOfferId = (state = null, action) => { 
  switch (action.type) { 
    case 'SET_OFFER_ID':
      return action.id;
      
    default:
      return state
  }
}
