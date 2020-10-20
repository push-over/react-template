import { GET_JOKE_LIST } from './constants'

import { commonInteractor } from '../../../core'


export const getJokeList = (data: any) => ({
  type: GET_JOKE_LIST,
  data,
})


export const GetJokeList = () => {
  return (dispatch: any) => {
    commonInteractor.getJokeList().then(response => {
      const { result } = response
      dispatch(getJokeList(result))
    })
  }
}
