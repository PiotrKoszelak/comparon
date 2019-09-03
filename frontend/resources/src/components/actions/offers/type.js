// fetch types data
export const typesFetched = (types) => ({
  type: 'FETCH_TYPES_SUCCESS',
  types
});


// selected type
export const selectType = (selectedType) => ({
  type: 'SELECT_TYPE',
  selectedType
});