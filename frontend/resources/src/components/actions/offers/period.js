// fetch periods data
export const periodsFetched = (periods) => ({
  type: 'FETCH_PERIODS_SUCCESS',
  periods
});

// selected period
export const selectPeriod = (selectedPeriod) => ({
  type: 'SELECT_PERIOD',
  selectedPeriod
});