import { createActions } from "redux-actions"

export const homeAction = createActions({
  HOME: {
    MOUNT: tab => ({ tab }),
    LOAD_REQUIRE: undefined,
    LOAD_SUCCESS: data => ({ data }),
    LOAD_ERROR: error => ({ error })
  }
})
