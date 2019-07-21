
//offer
export const offer = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_OFFER_SUCCESS':
            return [
              ...action.offer
            ]
          default:
            return state
        }
      }

//selected offer id
export const selectedOffer = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECTED_OFFER':
      return action.selectedOffer;
      
    default:
      return state
  }
}

//selected offer's price
export const offerPrice = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_PRICE':
      return action.offerPrice;
      
    default:
      return state
  }
}

//selected offer's operator
export const offerOperator = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_OPERATOR':
      return action.offerOperator;
      
    default:
      return state
  }
}

//selected offer's period
export const offerPeriod = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_PERIOD':
      return action.offerPeriod;
      
    default:
      return state
  }
}

//selected offer's speed
export const offerSpeed = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_SPEED':
      return action.offerSpeed;
      
    default:
      return state
  }
}

//selected offer's type
export const offerType = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_TYPE':
      return action.offerType;
      
    default:
      return state
  }
}