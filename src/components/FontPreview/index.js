// TODO: weight 다른 것 선택하면 잠시 폰트가 안 보이는 현상

import React from 'react'
import TextArea from 'react-textarea-autosize'
import classNames from 'classnames'

import HorizontalSlider from '../HorizontalSlider'
import s from './FontPreview.sass'
import SVGFontSize from './font-size.svg'
import SVGLetterSpacing from './letter-spacing.svg'
import SVGLineHeight from './line-height.svg'
import SVGAlignLeft from './align-left.svg'
import SVGAlignCenter from './align-center.svg'
import SVGAlignRight from './align-right.svg'

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
      fontSize: `${fontSize}px`,
      lineHeight,
      letterSpacing: `${letterSpacing}em`,
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
        <div className={classNames(s.menuSection, s.weightSelectWrap)}>
          <select
            className={s.weightSelect}
            value={selectedWeightIndex}
            onChange={e => this.setState({selectedWeightIndex: e.target.value})}>
            {weightSet.map((item, index) => {
              const weightName = weightSet[index].name
              return <option key={index} value={index}>{weightName}</option>
            })}
          </select>
          <div className={s.caret}>&gt;</div>
        </div>
        <div className={classNames(s.menuSection, s.alignButtons)}>
          <SVGAlignLeft
            className={classNames(s.alignButton, {[s.alignButtonSelected]: textAlign == 'left'})}
            onClick={() => this.setState({textAlign: 'left'})} />
          <SVGAlignCenter
            className={classNames(s.alignButton, {[s.alignButtonSelected]: textAlign == 'center'})}
            onClick={() => this.setState({textAlign: 'center'})} />
          <SVGAlignRight
            className={classNames(s.alignButton, {[s.alignButtonSelected]: textAlign == 'right'})}
            onClick={() => this.setState({textAlign: 'right'})} />
        </div>
        <div className={classNames(s.menuSection, s.sliderWrap)}>
          <HorizontalSlider min={10} max={100} initialValue={fontSize}
            onValueChange={(fontSize) => {
              this.setState({fontSize})
              this.textArea._resizeComponent()
            }}>
            <SVGFontSize className={s.sliderIcon} />
          </HorizontalSlider>
        </div>
        <div className={classNames(s.menuSection, s.sliderWrap)}>
          <HorizontalSlider min={1} max={2} initialValue={lineHeight}
            onValueChange={(lineHeight) => {
              this.setState({lineHeight})
              this.textArea._resizeComponent()
            }}>
            <SVGLineHeight className={s.sliderIcon} />
          </HorizontalSlider>
        </div>
        <div className={classNames(s.menuSection, s.sliderWrap)}>
          <HorizontalSlider min={-0.15} max={1} initialValue={letterSpacing}
            onValueChange={(letterSpacing) => {
              this.setState({letterSpacing})
              this.textArea._resizeComponent()
            }}>
            <SVGLetterSpacing className={s.sliderIcon} />
          </HorizontalSlider>
        </div>
      </div>
      <TextArea
        style={style}
        defaultValue={exampleText}
        ref={el => this.textArea = el} />
    </div>
  }
}
