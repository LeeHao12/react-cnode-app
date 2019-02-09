import { handleActions, combineActions } from "redux-actions"
import { tokenAction } from "../actions"

const defaultState = {
  token: undefined,
  loading: false,
  error: undefined,
  user: undefined,
  token: undefined
}

const { loadRequire, loadSuccess, loadError } = tokenAction.token

export const accessReducer = handleActions(
  {
    [combineActions(loadRequire, loadSuccess, loadError)]: (state, action) => {
      switch (action.type) {
        case loadRequire.toString(): {
          return { ...defaultState, loading: true }
        }
        case loadSuccess.toString(): {
          return {
            ...state,
            loading: false,
            user: action.payload.data,
            token: action.payload.token,
            error: undefined
          }
        }
        case loadError.toString(): {
          return {
            ...defaultState,
            error: action.payload
          }
        }
        default:
          return state
      }
    }
  },
  defaultState
)
