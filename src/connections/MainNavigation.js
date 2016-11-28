import React from 'react'
import {connect} from 'react-redux'

import PageSelector from '../components/PageSelector'
import HomePage from './HomePage'
import FontPage from './FontPage'

const rendererMap = {
  homePage: () => <HomePage key={1}></HomePage>,
  fontPage: () => <FontPage key={2}></FontPage>
}

export default connect(
  ({home}) => ({
    selected: home ? 'homePage' : 'fontPage',
    rendererMap: rendererMap
  })
)(PageSelector)
