//contact
export const contact = (state = {}, action) => { 
  switch (action.type) { 
    case 'FETCH_CONTACT_SUCCESS':
      return action.contact;
      
    default:
      return state
  }
}