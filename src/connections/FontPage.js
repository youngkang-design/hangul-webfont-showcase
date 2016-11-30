import {connect} from 'react-redux'

import FontShowcase from '../components/FontShowcase'
import createAction, {
  MenuOpened,
  MenuClosed
} from '../actions'
import createCommand, {
  SelectFont,
  GoHome
} from '../commands'

export default connect(
  ({
    font: {groupIndex, itemIndex},
    mobile,
    menu
  }) => ({groupIndex, itemIndex, mobile, menuState: menu}),
  dispatch => ({
    onMenuOpened: () => dispatch(createAction(MenuOpened)),
    onMenuClosed: () => dispatch(createAction(MenuClosed)),
    onTitleClicked: () => dispatch(createCommand(GoHome)),
    onFontSelected: ({groupIndex, itemIndex}) => {
      dispatch(createCommand(SelectFont, {groupIndex, itemIndex}))
    }
  })
)(FontShowcase)
