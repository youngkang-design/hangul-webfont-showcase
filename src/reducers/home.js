import {handleActions} from 'redux-actions'

import {
  HomeArrived,
  HomeLeaved
} from '../actions'

export default handleActions({
  [HomeArrived]: (s, _) => true,
  [HomeLeaved]: (s, _) => false
}, true)
