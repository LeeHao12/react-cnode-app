import { createActions } from "redux-actions"

export const homeAction = createActions({
  HOME: {
    MOUNT: undefined,
    CHANGE_TAB: undefined,
    // load
    LOAD_REQUIRE: undefined,
    LOAD_SUCCESS: data => ({ data }),
    LOAD_ERROR: error => ({ error }),
    // load more
    CLICK_NEXT_PAGE: pageIndex => ({ pageIndex }),
    LOAD_MORE_REQUIRE: undefined,
    LOAD_MORE_SUCCESS: data => ({ data }),
    LOAD_MORE_ERROR: error => ({ error })
  }
})

export const detailAction = createActions({
  DETAIL: {
    MOUNT: undefined,
    LOAD_REQUIRE: undefined,
    LOAD_SUCCESS: data => ({ data }),
    LOAD_ERROR: error => ({ error })
  }
})

export const tokenAction = createActions({
  TOKEN: {
    login: token => token,
    LOAD_REQUIRE: undefined,
    LOAD_SUCCESS: (data, token) => ({ data, token }),
    LOAD_ERROR: error => error
  }
})
