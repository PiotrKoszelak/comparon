// fetch operators data
export const operatorsFetched = (operators) => ({
  type: 'FETCH_OPERATORS_SUCCESS',
  operators
});

// selected operator
export const selectOperator = (selectedOperator) => ({
  type: 'SELECT_OPERATOR',
  selectedOperator
});