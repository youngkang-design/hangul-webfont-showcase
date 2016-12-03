import React from 'react'

import s from './FontSelector.sass'
import data from '../../data.yml'
import FontGroup from '../FontGroup'

export default class FontSelector extends React.Component {
  render() {
    const {asSlideMenu} = this.props
    return <div className={s.wrap}>
      {data.groups.map((group, index) => <div className={s.fontGroup} key={index}>
        <FontGroup groupTitle={group.title} items={group.items} asSlideMenu={asSlideMenu}></FontGroup>
      </div>)}
    </div>
  }
}
