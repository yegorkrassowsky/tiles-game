import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'
import {IState, ITiles, IPause, IWin} from '../interfaces'

type BoardProps = {} & ITiles & IPause & IWin

const Board: React.FC<BoardProps> = ({tiles, pause, win}) => {
  const [delayedWin , setDelayedWin] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setDelayedWin(win), 1000)
    return () => clearTimeout(timeout)
  }, [win])
  let classes = ['board']
  if(pause) {
    classes.push('pause')
  }
  if(delayedWin) {
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