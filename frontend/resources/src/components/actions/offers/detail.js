// fetch offer detail
export const offerDetailFetched = (offerDetail) => ({
  type: 'FETCH_OFFER_DETAIL_SUCCESS',
  offerDetail
});


// detail window
export const isDetailWindowOpen = (isDetailOpen) => ({
  type: 'IS_DETAIL_WINDOW_OPEN',
  isDetailOpen
});