import { produce } from 'immer'

import * as actionTypes from './constants'

export interface IJokeState {
  jokeList: Array<any>
}

const defaultState: IJokeState = {
  jokeList: []
}

export default (state = defaultState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.GET_JOKE_LIST:
        draft.jokeList = action.data
        break
    }
  })
}
