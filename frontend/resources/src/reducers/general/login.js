
// modeAdmin
export const  modeAdmin = (state = false, action) => { 
  switch (action.type) { 
    case 'SET_MODE_ADMIN':
      return action.modeAdmin;
      
    default:
      return state
  }
}