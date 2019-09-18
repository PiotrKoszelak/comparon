
//offer
export const offers = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_OFFERS_SUCCESS':
            return [
              ...action.offers
            ]
          default:
            return state
        }
      }

//selected offer id
export const selectedOffer = (state = {id: 0}, action) => { 
  switch (action.type) { 
    case 'SELECT_OFFER':
      return action.selectedOffer;
      
    default:
      return state
  }
}

//number of selected offers
export const numberSelectedOffers = (state = '', action) => { 
  switch (action.type) { 
    case 'SET_NUMBER_SELECTED_OFFERS':
      return action.numberSelectedOffers;
      
    default:
      return state
  }
}

//number of offers to compare
export const numberOffersToComapre = (state = [], action) => { 
  switch (action.type) { 
    case 'SET_NUMBER_OFFERS_TO_COMPARE':
      return action.numberOffersToComapre;
      
    default:
      return state
  }
}
