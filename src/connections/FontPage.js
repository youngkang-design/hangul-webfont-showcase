import {connect} from 'react-redux'

import FontShowcase from '../components/FontShowcase'

export default connect(
  ({font: [groupIndex, itemIndex]}) => ({groupIndex, itemIndex})
)(FontShowcase)
