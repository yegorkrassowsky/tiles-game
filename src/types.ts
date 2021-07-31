import {ThunkDispatch} from 'redux-thunk'
import {IState, IID, IPause} from './interfaces'

export enum TileStatuses {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  SOLVED = 'SOLVED',
}

export enum ActionTypes {
  INIT = 'INIT',
  OPEN = 'OPEN',
  SOLVE = 'SOLVE',
  CLOSE = 'CLOSE',
  ROUND = 'ROUND',
  PAUSE = 'PAUSE',
}

export type ActionType =
| {type: ActionTypes.INIT}
| {type: ActionTypes.ROUND}
| {type: ActionTypes.PAUSE} & IPause
| {type: ActionTypes.OPEN} & IID
| {type: ActionTypes.SOLVE} & IID
| {type: ActionTypes.CLOSE} & IID

export type ThunkDispatchType = ThunkDispatch<IState, void, ActionType>

export type GetStateType = () => IState
export type DispatchCallbackType = (dispatch: ThunkDispatchType, getState: GetStateType) => void

