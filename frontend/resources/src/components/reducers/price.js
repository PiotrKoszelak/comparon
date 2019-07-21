
//selected price
export const price = (state = '20', action) => { 
  switch (action.type) { 
    case 'SELECTED_PRICE':
        return action.price;
        
    default:
      return state
  }
}

//selected price
export const offerPrice = (state = '', action) => { 
  switch (action.type) { 
    case 'OFFER_PRICE':
        return action.offerPrice;
        
    default:
      return state
  }
}