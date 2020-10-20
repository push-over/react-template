import { IJokeState } from '../pages/joke/store/reducer'

export interface IStoreState {
  joke: IJokeState
}

export interface IAction<T> {
  type: string
  payload: T
}
