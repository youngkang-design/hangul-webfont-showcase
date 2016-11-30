import {handleActions} from 'redux-actions'

import {
  MobileModeApplied
} from '../actions'

export default handleActions({
  [MobileModeApplied]: (s, _) => true
}, false)
