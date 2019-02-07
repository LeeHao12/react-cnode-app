import { createActions } from "redux-actions"

export const homeAction = createActions({
  HOME: {
    MOUNT: undefined,
    CHANGE_TAB: undefined,
    LOAD_REQUIRE: undefined,
    LOAD_SUCCESS: data => ({ data }),
    LOAD_ERROR: error => ({ error })
  }
})
