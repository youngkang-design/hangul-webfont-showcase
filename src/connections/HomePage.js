import {connect} from 'react-redux'

import Home from '../components/Home'
import createCommand, {SelectFont} from '../commands'

export default connect(
  null,
  dispatch => ({
    onFontSelected: ({groupIndex, itemIndex}) => {
      dispatch(createCommand(SelectFont, {groupIndex, itemIndex}))
    }
  })
)(Home)
