import React, {PropTypes} from 'react'

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
    return rendererMap[selected]()
  }
}
