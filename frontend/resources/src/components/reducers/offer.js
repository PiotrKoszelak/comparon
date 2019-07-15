
//offer
export const offer = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_OFFER_SUCCESS':
            return [
              ...action.offer
            ]
          default:
            return state
        }
      }