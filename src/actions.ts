import { ActionType, ActionTypes, DispatchCallbackType, ThunkDispatchType, GetStateType } from "./types";

export const initAction = (): ActionType => ({type: ActionTypes.INIT})
export const openAction = (id: number): DispatchCallbackType  => (dispatch: ThunkDispatchType, getState: GetStateType) => {
  if(!getState().pause){
    if(getState().opened.length < 2){
      dispatch({type: ActionTypes.OPEN, id})
    }
    return dispatch(solveAction())
  }
}

const solveAction = () => (dispatch: ThunkDispatchType, getState: GetStateType) => {
    const opened = getState().opened
    if(opened.length === 2) {
      dispatch({type: ActionTypes.PAUSE, pause: true})
      setTimeout(() => {
        if(opened[0].color === opened[1].color) {
          opened.forEach(tile => dispatch({type: ActionTypes.SOLVE, id: tile.id}))
        } else {
          opened.forEach(tile => dispatch({type: ActionTypes.CLOSE, id: tile.id}))
        }
        dispatch({type: ActionTypes.ROUND})
      }, 1000)
    }
}

export const restartAction = () => (dispatch: ThunkDispatchType, getState: GetStateType) => {
  getState().tiles.forEach(tile => dispatch({type: ActionTypes.CLOSE, id: tile.id}))
  dispatch({type: ActionTypes.PAUSE, pause: true})
  setTimeout(() => dispatch(initAction()), 1000)
}