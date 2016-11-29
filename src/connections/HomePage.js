import {connect} from 'react-redux'

import Home from '../components/Home'
import createCommand, {SelectFont} from '../commands'

export default connect(
  null,
  dispatch => ({
    onFontClicked: ({groupIndex, itemIndex}) => {
      dispatch(createCommand(SelectFont, {groupIndex, itemIndex}))
    }
  })
)(Home)
