import React, {PropTypes} from 'react'
import classNames from 'classnames'

import s from './HorizontalSlider.sass'

export default class HorizontalSlider extends React.Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    initialValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      value: props.initialValue || 0
    }
    this.min = props.min || 0
    this.max = props.max || 1
  }
  ratioToValue = ratio => this.min + (this.max - this.min) * ratio
  valueToRatio = value => (value - this.min) / (this.max - this.min)
  handleDragging = e => {
    const {onValueChange} = this.props
    const ratio = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.clientWidth
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
    const {value} = this.state
    return <div className={s.wrap}
      onMouseDown={this.onMouseDown}
      onMouseMove={this.onMouseMove}
      onMouseUp={this.onMouseUp}
      onMouseLeave={this.onMouseLeave}
      >
      <div className={s.bar}></div>
      <div className={s.cursorWrap}>
        <div className={s.cursor} style={{left: `${this.valueToRatio(value)* 100}%`}}></div>
      </div>
    </div>
  }
}
