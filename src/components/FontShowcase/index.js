import React, {PropTypes} from 'react'
import data from '../../data.yml'

export default class FontShowcase extends React.Component {
  static propTypes = {
    groupIndex: PropTypes.number.isRequired,
    itemIndex: PropTypes.number.isRequired
  }
  render() {
    const {groupIndex, itemIndex} = this.props
    const {name: fontName, desc: fontDescription} = data.groups[groupIndex].items[itemIndex]
    return <div>
      <h1>한글 웹폰트 글꼴보기집</h1>
      <div>{fontName}</div>
      <div>{fontDescription}</div>
    </div>
  }
}
