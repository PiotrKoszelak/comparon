//selected types
export const isDetailOpen = (state = false, action) => { 
  switch (action.type) { 
    case 'IS_DETAIL_WINDOW_OPEN':
        return action.isDetailOpen;
        
    default:
      return state
  }
}

//offer
export const details = (state = {}, action) => { 
  switch (action.type) { 
    case 'FETCH_OFFER_DETAIL_SUCCESS':
      return action.offerDetail;
      
    default:
      return state
  }
}