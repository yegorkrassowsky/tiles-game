import React from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'
import {IState, ITiles, IPause, IWin} from '../interfaces'

type BoardProps = {} & ITiles & IPause & IWin

const Board: React.FC<BoardProps> = ({tiles, pause, win}) => {
  let classes = ['board']
  if(pause) {
    classes.push('pause')
  }
  if(win) {
    classes.push('win')
  }
  return (
    <div className={classes.join(' ')}>
      {tiles.map(tile => (<Tile key={tile.id} id={tile.id} color={tile.color} status={tile.status} />))}
    </div>
  )
}
export default connect((state: IState) => ({
  tiles: state.tiles,
  pause: state.pause,
  win: state.win,
}))(Board)