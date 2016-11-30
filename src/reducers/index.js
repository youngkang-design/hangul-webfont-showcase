import { combineReducers } from 'redux'

import menu from './menu'
import font from './font'
import home from './home'
import curtain from './curtain'
import mobile from './mobile'
export default combineReducers({
  menu,
  font,
  home,
  curtain,
  mobile
})
