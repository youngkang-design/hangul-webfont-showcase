// TODO: weight 다른 것 선택하면 잠시 폰트가 안 보이는 현상

import React from 'react'
import TextArea from 'react-textarea-autosize'
import s from './FontPreview.sass'

export default class FontPreview extends React.Component {
  constructor(props) {
    super(props)
    // const {fontSize, lineHeight, letterSpacing, exampleText} = props
    const {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      weightSet
    } = props
    const selectedWeightIndex = Math.max(0, weightSet.findIndex(item => item.default))
    this.state = {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      selectedWeightIndex
    }
  }
  render() {
    const {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      selectedWeightIndex,
    } = this.state
    const {
      weightSet,
      exampleText
    } = this.props
    const {
      name: weightName,
      weight: fontWeight
    } = weightSet[selectedWeightIndex]
    const style = {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      fontWeight,
      border: 'none',
      outline: 'none',
      resize: 'none',
      width: '100%',
      padding: 0,
      minHeight: '100px'
    }
    return <div className={s.wrap}>
      <select
        value={selectedWeightIndex}
        onChange={e => this.setState({selectedWeightIndex: e.target.value})}>
        {weightSet.map((item, index) => {
          const weightName = weightSet[index].name
          return <option key={index} value={index}>{weightName}</option>
        })}
      </select>
      <TextArea
        style={style}
        defaultValue={exampleText} />
    </div>
  }
}
