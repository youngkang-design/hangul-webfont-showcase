import {handleActions} from 'redux-actions'

import {
  HomeArrived,
  FontChanged
} from '../actions'

export default handleActions({
  [HomeArrived]: (s, _) => true,
  [FontChanged]: (s, _) => false
}, true)
