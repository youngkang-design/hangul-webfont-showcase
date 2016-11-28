import React, {PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import s from './PageSelector.sass'

export default class SimpleSwitcher extends React.Component {
  static propTypes = {
    selected: PropTypes.string,
    rendererMap: PropTypes.objectOf(PropTypes.func),
  }

  static defaultProps = {
    selected: null,
    rendererMap: {},
  }

  render() {
    const {selected, rendererMap} = this.props
    return <ReactCSSTransitionGroup
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}
      transitionName={s}>
      {rendererMap[selected]()}
    </ReactCSSTransitionGroup>
  }
}
