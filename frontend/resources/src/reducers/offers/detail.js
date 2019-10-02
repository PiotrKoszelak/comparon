//selected types
export const isDetailOpen = (state = false, action) => { 
  switch (action.type) { 
    case 'IS_DETAIL_WINDOW_OPEN':
        return action.isDetailOpen;
        
    default:
      return state
  }
}
