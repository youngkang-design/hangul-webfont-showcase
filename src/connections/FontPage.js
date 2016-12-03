import React from 'react'
import {connect} from 'react-redux'

import FontShowcase from '../components/FontShowcase'
import createAction, {
  MenuOpened,
  MenuClosed
} from '../actions'

export default connect(
  ({
    font,
    mobile,
    menu
  }) => ({fontFamily: font, mobile, menuState: menu}),
  dispatch => ({
    onMenuOpened: () => dispatch(createAction(MenuOpened)),
    onMenuClosed: () => dispatch(createAction(MenuClosed))
  })
)(props => <FontShowcase key={props.fontFamily} {...props}/>)
