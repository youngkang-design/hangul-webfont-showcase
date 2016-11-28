import {handleActions} from 'redux-actions'

import {
  MenuOpened,
  MenuClosed
} from '../actions'

export default handleActions({
  [MenuOpened]: (s, _) => true,
  [MenuClosed]: (s, _) => false
}, false)
