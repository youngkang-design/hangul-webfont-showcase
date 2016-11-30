import React from 'react'

import s from './FontSelector.sass'
import data from '../../data.yml'
import FontGroup from '../FontGroup'

export default class FontSelector extends React.Component {
  render() {
    const {onFontSelected, asSlideMenu} = this.props
    return <div className={s.wrap}>
      {data.groups.map((group, index) => <div className={s.fontGroup} key={index}>
        <FontGroup groupIndex={index} groupTitle={group.title} fontNames={group.items.map(i => i.name)} onFontSelected={onFontSelected} asSlideMenu={asSlideMenu}></FontGroup>
      </div>)}
    </div>
  }
}
