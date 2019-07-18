
//periods
export const periods = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_PERIODS_SUCCESS':
            return [
              ...action.periods
            ]
          default:
            return state
        }
      }

//selected period
export const period = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECTED_PERIOD':
        return action.period;
        
    default:
      return state
  }
}