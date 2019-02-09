import { handleActions, combineActions } from "redux-actions"
import { detailAction } from "../actions"

const defaultState = {
  loading: false,
  data: null
}

const { loadRequire, loadSuccess } = detailAction.detail

export const detailReducer = handleActions(
  {
    [combineActions(loadRequire, loadSuccess)]: (state, action) => {
      switch (action.type) {
        case loadRequire.toString(): {
          return { ...state, loading: true }
        }
        case loadSuccess.toString(): {
          return { ...state, loading: false, data: action.payload.data }
        }
        default:
          return state
      }
    }
  },
  defaultState
)
