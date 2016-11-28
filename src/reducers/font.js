import {handleActions} from 'redux-actions'

import {
  FontChanged,
} from '../actions'

export default handleActions({
  [FontChanged]: (s, {payload}) => {
    if (payload === null) {
      return null
    } else {
      const [groupIndex, itemIndex] = payload
      return [groupIndex, itemIndex]
    }
  }
}, null)
