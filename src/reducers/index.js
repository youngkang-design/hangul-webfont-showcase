import { combineReducers } from 'redux'

import menu from './menu'
import font from './font'
import home from './home'

export default combineReducers({
  menu,
  font,
  home
})
