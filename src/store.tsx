import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {IState, ITile} from './interfaces'
import {ActionType, ActionTypes, TileStatuses} from './types'
import {shuffle} from './utils'

const defaultTiles = new Array(8).fill(null).map((value, index) => ({color: index+1, status: TileStatuses.CLOSED}))
const initTiles = (tiles: any[]): any[] => shuffle([...tiles, ...tiles].map((tile, index) => ({...tile, id: index})))

const initialState = {
  round: 1,
  opened: [],
  tiles: initTiles(defaultTiles),
  solved: 0,
  pause: false,
  win: false,
}

const reducer = (state: IState = initialState, action: ActionType) => {
  switch(action.type) {
    case ActionTypes.INIT:
      return {...initialState, tiles: initTiles(defaultTiles)}
    case ActionTypes.OPEN:
      return {
        ...state,
        tiles: changeTileStatus(state.tiles, action.id, TileStatuses.OPEN),
        opened: [...state.opened, state.tiles.find(tile => tile.id === action.id)]
      }
    case ActionTypes.CLOSE:
      return {
        ...state,
        tiles: changeTileStatus(state.tiles, action.id, TileStatuses.CLOSED),
        opened: [],
        pause: false,
      }
    case ActionTypes.SOLVE:
      const solved = state.solved + 1
      return {
        ...state,
        tiles: changeTileStatus(state.tiles, action.id, TileStatuses.SOLVED),
        opened: [],
        pause: false,
        win: solved === 16,
        solved,
      }
    case ActionTypes.ROUND:
      return {...state, round: state.round + 1}
    case ActionTypes.PAUSE:
      return {...state, pause: action.pause}
    default:
      return state
  }
}

const changeTileStatus = (tiles: ITile[], id: number, status: TileStatuses) => tiles.map(tile => tile.id === id ? {...tile, status} : tile)

export const store: Store<IState, ActionType> = createStore(reducer, applyMiddleware(thunk))
