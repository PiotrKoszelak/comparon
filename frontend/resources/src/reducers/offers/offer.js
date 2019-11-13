
export const offers = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_OFFERS_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_OFFERS_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_OFFERSS_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};

//selected offer id
export const selectedOffer = (state = -1, action) => { 
  switch (action.type) { 
    case 'SELECT_OFFER':
      return action.selectedOffer;
      
    default:
      return state
  }
}

//number of selected offers
export const numberSelectedOffers = (state = '', action) => { 
  switch (action.type) { 
    case 'SET_NUMBER_SELECTED_OFFERS':
      return action.numberSelectedOffers;
      
    default:
      return state
  }
}

//number of offers to compare
export const offersToCompare = (state = [], action) => { 
  switch (action.type) { 
    case 'SET_OFFERS_TO_COMPARE':
      return action.offersToCompare;
      
    default:
      return state
  }
}

//selected sort type
export const sortType = (state = 1, action) => { 
  switch (action.type) { 
    case 'SET_SORT_TYPE':
      return action.sortType;
      
    default:
      return state
  }
}
