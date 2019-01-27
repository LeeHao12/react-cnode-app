import { handleActions, combineActions } from "redux-actions"
import { homeAction } from "../actions/home"

const defaultState = {
  loading: false,
  list: []
}

const { loadRequire, loadSuccess, loadError } = homeAction.home

export const homeReducer = handleActions(
  {
    [combineActions(loadRequire, loadSuccess)]: (state, action) => {
      switch (action.type) {
        case loadRequire.toString(): {
          return { ...state, loading: true }
        }
        case loadSuccess.toString(): {
          return { ...state, loading: false, list: action.payload.data }
        }
        case loadError.toString(): {
          return { ...state, loading: false }
        }
        default:
          return state
      }
    }
  },
  defaultState
)
