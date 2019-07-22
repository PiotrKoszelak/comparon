
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
export const selectedCity = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_CITY':
      return action.selectedCity;
      
    default:
      return state
  }
}