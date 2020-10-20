import React, { FC, memo, useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { RouteConfigComponentProps } from 'react-router-config'
import { connect } from 'react-redux'
import { actionCreators as actionTypes } from './store'
import { AppState } from '../../store'

import './style.scss'

interface IJokeProps extends RouteConfigComponentProps {
  jokeList: Array<any>
  getJokeList: any
}

const Joke: FC<IJokeProps> = ({ jokeList, getJokeList }) => {
  useEffect(() => {
    getJokeList()
  }, [])

  return (
    <div className="joke_wrapper">
      <ul className="joke_list">
        {
          jokeList.map(item => {
            return (
            <li className="item" key={item.sid}>
              <h1 className="item__title">{item.name}</h1>
              <small className="item__description">{item.text}</small>
              <video className="item__video" src={item.video} controls></video>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  jokeList: state.joke.jokeList,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    getJokeList() {
      dispatch(actionTypes.GetJokeList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(withRouter(Joke)))
