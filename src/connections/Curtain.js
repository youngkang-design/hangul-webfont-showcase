import {connect} from 'react-redux'

import Curtain from '../components/Curtain'

export default connect(
  ({curtain: {loading, state}}) => ({loading, state}),
)(Curtain)
