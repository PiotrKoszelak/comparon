
//operators
export const cities = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_CITIES_SUCCESS':
            return [
              ...action.cities
            ]
          default:
            return state
        }
      }

//selected city
export const city = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECTED_CITY':
      return action.city;
      
    default:
      return state
  }
}