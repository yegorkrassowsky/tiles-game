import React from 'react'
import {IState, IRound, IWin} from '../interfaces'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {initAction} from '../actions'
import { ActionType } from '../types'

type HeadingProps = {
  restart: () => void
} & IRound & IWin
const Heading: React.FC<HeadingProps> = ({round, win, restart}) => {
  return (
    <div className="heading">
      <div>Round {round}</div>
      <div>{win ? 'Game over!' : 'Find 2 tiles with same color!'}</div>
      <button className="btn" onClick={restart}>Restart</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  restart: () => {dispatch(initAction())}
})

export default connect((state: IState) => ({
  round: state.round,
  win: state.win
}), mapDispatchToProps)(Heading)