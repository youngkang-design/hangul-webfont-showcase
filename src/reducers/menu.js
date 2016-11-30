import {handleActions} from 'redux-actions'

import {
  MenuOpened,
  MenuClosed,
  FontChanged
} from '../actions'

export default handleActions({
  [MenuOpened]: (s, _) => 'opened',
  [MenuClosed]: (s, _) => 'closed',
  [FontChanged]: (s, _) => null,
}, null)
