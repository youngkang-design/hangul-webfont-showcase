import React from 'react'
import s from './FontGroup.sass'
import {leftpad} from '../../utils'

export default class FontGroup extends React.Component {
  render() {
    const {
      groupTitle,
      fontNames,
      groupIndex
    } = this.props
    return <div>
      <div className={s.title}>{groupTitle}</div>
      <div>
        {fontNames.map((name, index) => <div key={index} className={s.item}>
          <div className={s.number}>{leftpad('0', 2, (index + 1).toString())}</div>
          <div className={s.fontName}>{name}</div>
        </div>)}
      </div>
    </div>
  }
}
