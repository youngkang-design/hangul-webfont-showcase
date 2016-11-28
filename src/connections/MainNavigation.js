import React from 'react'
import {connect} from 'react-redux'

import PageSelector from '../components/PageSelector'
import HomePage from './HomePage'
import FontPage from './FontPage'

const rendererMap = {
  homePage: () => <HomePage></HomePage>,
  fontPage: () => <FontPage></FontPage>
}

export default connect(
  ({font}) => ({
    selected: font === null ? 'homePage' : 'fontPage',
    rendererMap: rendererMap
  })
)(PageSelector)
