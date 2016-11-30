import React, {PropTypes} from 'react'
import classNames from 'classnames'

import s from './HorizontalSlider.sass'

export const paddingLeft = 14
export const paddingRight = 19.5

export default class HorizontalSlider extends React.Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    initialValue: PropTypes.number,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    children: PropTypes.element
  }
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      value: props.initialValue || 0
    }
  }
  ratioToValue = ratio => this.props.min + (this.props.max - this.props.min) * ratio
  valueToRatio = value => (value - this.props.min) / (this.props.max - this.props.min)
  handleDragging = e => {
    const {onValueChange} = this.props
    const areaWidth = e.currentTarget.clientWidth - paddingLeft - paddingRight
    const rect = e.currentTarget.getBoundingClientRect()
    const offset = e.clientX - rect.left
    const normalized = Math.min(Math.max(0, offset - paddingLeft), areaWidth)
    const ratio = normalized / areaWidth
    if (onValueChange) onValueChange(this.ratioToValue(ratio))
    this.setState({
      value: this.ratioToValue(ratio),
      dragging: true
    })
  }
  cancelDragging = () => this.setState({
    dragging: false
  })
  onMouseDown = e => this.handleDragging(e)
  onMouseMove = e => {
    if (this.state.dragging) {
      this.handleDragging(e)
    }
  }
  onMouseUp = () => this.cancelDragging()
  onMouseLeave = () => this.cancelDragging()
  render() {
    const {children} = this.props
    const {value} = this.state
    return <div className={s.wrap}>
      <div className={s.svgIconWrap}>
        {children}
      </div>
      <div className={s.clickable}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        >
        <div className={s.guide}>
          <div className={s.cursor} style={{left: `${this.valueToRatio(value)* 100}%`}}></div>
        </div>
      </div>
    </div>
  }
}
