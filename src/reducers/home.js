import { handleActions, combineActions } from "redux-actions"
import { homeAction } from "../actions"

const defaultState = {
  loading: false,
  loadingMore: false,
  list: [],
  page: 1
}

const {
  loadRequire,
  loadSuccess,
  loadMoreRequire,
  loadMoreSuccess,
  clickNextPage
} = homeAction.home

export const homeReducer = handleActions(
  {
    [combineActions(
      loadRequire,
      loadSuccess,
      loadMoreRequire,
      loadMoreSuccess,
      clickNextPage
    )]: (state, action) => {
      switch (action.type) {
        case clickNextPage.toString(): {
          return { ...state, page: action.payload.pageIndex }
        }
        // 加载
        case loadRequire.toString(): {
          return { ...state, loading: true, page: 1 }
        }
        case loadSuccess.toString(): {
          return { ...state, loading: false, list: action.payload.data }
        }

        // 翻页
        case loadMoreRequire.toString(): {
          return { ...state, loadingMore: true }
        }
        case loadMoreSuccess.toString(): {
          return {
            ...state,
            loadingMore: false,
            list: [...state.list, ...action.payload.data]
          }
        }

        default:
          return state
      }
    }
  },
  defaultState
)
