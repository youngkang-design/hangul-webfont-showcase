import {connect} from 'react-redux'

import FontShowcase from '../components/FontShowcase'
import createCommand, {GoHome} from '../commands'

export default connect(
  ({
    font: {groupIndex, itemIndex},
    mobile
  }) => ({groupIndex, itemIndex, mobile}),
  dispatch => ({
    onTitleClicked: () => dispatch(createCommand(GoHome))
  })
)(FontShowcase)
