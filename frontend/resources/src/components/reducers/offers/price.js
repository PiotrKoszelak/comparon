
//selected price
export const selectedPrice = (state = 0, action) => { 
  switch (action.type) { 
    case 'SELECT_PRICE':
        return action.selectedPrice;
        
    default:
      return state
  }
}
