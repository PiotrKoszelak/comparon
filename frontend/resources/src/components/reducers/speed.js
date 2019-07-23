
//selected price
export const selectedSpeed = (state = 0, action) => { 
    switch (action.type) { 
      case 'SELECT_SPEED':
          return action.selectedSpeed;
          
      default:
        return state
    }
  }
  