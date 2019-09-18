
// selected language
export const language = (state = 'pl', action) => { 
  switch (action.type) { 
    case 'SET_LANGUAGE':
      return action.language;
      
    default:
      return state
  }
}