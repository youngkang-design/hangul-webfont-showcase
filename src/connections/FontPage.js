import {connect} from 'react-redux'

import FontShowcase from '../components/FontShowcase'
import createAction, {HomeArrived} from '../actions' // FIXME

export default connect(
  ({font: [groupIndex, itemIndex]}) => ({groupIndex, itemIndex}),
  dispatch => ({
    onTitleClicked: () => dispatch(createAction(HomeArrived))
  })
)(FontShowcase)
