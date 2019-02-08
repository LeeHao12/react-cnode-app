import { createSelector } from "reselect"

const homeSelector = state => state.home

export const homeListIsLoadingSelector = createSelector(
  homeSelector,
  home => home.loading
)

export const homeListSelector = createSelector(
  homeSelector,
  home => home.list
)

export const homePageSelector = createSelector(
  homeSelector,
  home => home.page
)

export const homeLoadingMoreSelector = createSelector(
  homeSelector,
  home => home.loadingMore
)
