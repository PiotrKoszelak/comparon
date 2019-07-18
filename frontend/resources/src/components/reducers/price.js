

//selected price
export const price = (state = '20', action) => { 
  switch (action.type) { 
    case 'SELECTED_PRICE':
        return action.price;
        
    default:
      return state
  }
}