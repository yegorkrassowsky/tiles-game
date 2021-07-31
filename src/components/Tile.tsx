import React from 'react'
import {ITile} from '../interfaces'
import {TileStatuses, ThunkDispatchType} from '../types'
import {connect} from 'react-redux'
import {openAction} from '../actions'

type TileProps = {
  open: (id: number) => void
} & ITile

const Tile: React.FC<TileProps> = ({id, color, status, open}) => {
  let classes = ['tile']
  if(status === TileStatuses.OPEN) {
    classes.push(`open color-${color}`)
  }
  if(status === TileStatuses.CLOSED) {
    classes.push('closed')
  }
  if(status === TileStatuses.SOLVED) {
    classes.push(`solved color-${color}`)
  }
  return (
    <div className={classes.join(' ')} onClick={() => open(id)}>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  open: (id: number) => {dispatch(openAction(id))}
})

export default connect(null, mapDispatchToProps)(Tile)