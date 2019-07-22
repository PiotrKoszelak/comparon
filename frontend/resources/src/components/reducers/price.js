
//selected price
export const selectedPrice = (state = '', action) => { 
  switch (action.type) { 
    case 'SELECT_PRICE':
        return action.selectedPrice;
        
    default:
      return state
  }
}
