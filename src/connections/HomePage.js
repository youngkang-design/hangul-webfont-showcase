import {connect} from 'react-redux'

import Home from '../components/Home'
import createAction, {FontChanged} from '../actions' // FIXME

export default connect(
  null,
  dispatch => ({
    onFontClicked: ([groupIndex, itemIndex]) => dispatch(createAction(FontChanged, [groupIndex, itemIndex]))
  })
)(Home)
