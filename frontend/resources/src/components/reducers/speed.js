
//selected price
export const selectedSpeed = (state = '', action) => { 
    switch (action.type) { 
      case 'SELECT_SPEED':
          return action.selectedSpeed;
          
      default:
        return state
    }
  }
  