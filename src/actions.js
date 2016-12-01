export default function createAction(type, payload) {
  return {type, payload, isAction: true}
}
export const FontChanged = 'FontChanged'
export const MenuOpened = 'MenuOpened'
export const MenuClosed = 'MenuClosed'
export const HomeArrived = 'HomeArrived'
export const CurtainEntering = 'CurtainEntering'
export const CurtainLeaving = 'CurtainLeaving'
export const CurtainLoading = 'CurtainLoading'
export const CurtainNotLoading = 'CurtainNotLoading'
export const MobileModeApplied = 'MobileModeApplied'
