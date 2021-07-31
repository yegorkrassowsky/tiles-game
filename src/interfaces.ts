import {TileStatuses} from './types'

export interface IID {
  id: number
}

export interface IColor {
  color: number
}

export interface IStatus {
  status: TileStatuses
}

export interface ITile extends IID, IColor, IStatus {}

export interface ITiles {
  tiles: ITile[]
}

export interface IRound {
  round: number
}

export interface IOpened {
  opened: any[]
}

export interface ISolved {
  solved: number
}

export interface IPause {
  pause: boolean
}

export interface IWin {
  win: boolean
}

export interface IState extends IRound, ITiles, IOpened, ISolved, IPause, IWin {}