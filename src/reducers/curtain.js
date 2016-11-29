import {handleActions} from 'redux-actions'

import {
  CurtainEntering,
  CurtainLeaving,
  CurtainLoading
} from '../actions'

export default handleActions({
  [CurtainEntering]: (s, _) => {
    return {state: 'entering', loading: false}
  },
  [CurtainLeaving]: (s, _) => {
    return {state: 'leaving', loading: false}
  },
  [CurtainLoading]: (s, _) => {
    return Object.assign({}, s, {loading: true})
  }
}, {loading: false, state: null})
