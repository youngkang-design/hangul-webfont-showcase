import React from 'react'
import classNames from 'classnames'

import s from './FontGroup.sass'
import {leftpad} from '../../utils'

export default class FontGroup extends React.Component {
  render() {
    const {
      groupTitle,
      items,
      asSlideMenu
    } = this.props
    return <div className={classNames(s.wrap, {[s.asSlideMenu]: asSlideMenu})}>
      <div className={s.title}>{groupTitle}</div>
      <div className={s.items}>
        {items.map((item, index) => <a key={item.name} className={s.item} href={`#/fonts/${item.family}`}>
          <div className={s.number}>{leftpad('0', 2, (index + 1).toString())}</div>
          <div className={s.fontName}>{item.name}</div>
        </a>)}
      </div>
    </div>
  }
}
