import {handleActions} from 'redux-actions'

import {
  FontChanged,
} from '../actions'

export default handleActions({
  [FontChanged]: (s, {payload}) => payload // font family
}, null)
