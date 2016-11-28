export default function createAction(type, payload) {
  return {type, payload, isAction: true}
}
export const FontChanged = 'FontChanged'
export const MenuOpened = 'MenuOpened'
export const MenuClosed = 'MenuClosed'
