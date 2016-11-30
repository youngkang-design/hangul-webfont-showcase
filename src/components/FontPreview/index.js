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
      selectedWeightIndex,
      textAlign: 'left'
    }
  }
  render() {
    const {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      selectedWeightIndex,
      textAlign
    } = this.state
    const {
      weightSet,
      exampleText
    } = this.props
    const {
      weight: fontWeight
    } = weightSet[selectedWeightIndex]
    const style = {
      fontFamily,
      fontSize,
      lineHeight,
      letterSpacing,
      fontWeight,
      textAlign,
      border: 'none',
      outline: 'none',
      resize: 'none',
      width: '100%',
      padding: 0,
      minHeight: '100px',
      overflow: 'hidden'
    }
    return <div className={s.wrap}>
      <div className={s.menu}>
        <select
          value={selectedWeightIndex}
          onChange={e => this.setState({selectedWeightIndex: e.target.value})}>
          {weightSet.map((item, index) => {
            const weightName = weightSet[index].name
            return <option key={index} value={index}>{weightName}</option>
          })}
        </select>
        <div className={s.alignButtons}>
          <div className={s.alignButton} onClick={() => this.setState({textAlign: 'left'})}>L</div>
          <div className={s.alignButton} onClick={() => this.setState({textAlign: 'center'})}>C</div>
          <div className={s.alignButton} onClick={() => this.setState({textAlign: 'right'})}>R</div>
        </div>
      </div>
      <TextArea
        style={style}
        defaultValue={exampleText} />
    </div>
  }
}
