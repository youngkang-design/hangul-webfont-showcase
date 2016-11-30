import React from 'react'
import classNames from 'classnames'

import s from './FontGroup.sass'
import {leftpad} from '../../utils'

export default class FontGroup extends React.Component {
  render() {
    const {
      groupTitle,
      fontNames,
      groupIndex,
      onFontSelected,
      asSlideMenu
    } = this.props
    return <div className={classNames(s.wrap, {[s.asSlideMenu]: asSlideMenu})}>
      <div className={s.title}>{groupTitle}</div>
      <div className={s.items}>
        {fontNames.map((name, index) => <div key={index} className={s.item} onClick={() => onFontSelected({groupIndex, itemIndex: index})}>
          <div className={s.number}>{leftpad('0', 2, (index + 1).toString())}</div>
          <div className={s.fontName}>{name}</div>
        </div>)}
      </div>
    </div>
  }
}
