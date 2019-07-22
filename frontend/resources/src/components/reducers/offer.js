
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
export const selectedOffer = (state = {}, action) => { 
  switch (action.type) { 
    case 'SELECT_OFFER':
      return action.selectedOffer;
      
    default:
      return state
  }
}
