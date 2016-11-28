import {handleActions} from 'redux-actions'

import {
  FontChanged,
} from '../actions'

export default handleActions({
  [FontChanged]: (s, {payload: [groupIndex, itemIndex]}) => [groupIndex, itemIndex]
}, null)
