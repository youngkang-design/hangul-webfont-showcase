import React from 'react'
import classNames from 'classnames'

import s from './LoadingIndicator.sass'

export default class SimpleSwitcher extends React.Component {
  render() {
    return <div className={s.wrap}>
      <div className={s.row}>
        <div className={classNames(s.box, s.box1)}></div>
        <div className={classNames(s.box, s.box2)}></div>
      </div>
      <div className={s.row}>
        <div className={classNames(s.box, s.box4)}></div>
        <div className={classNames(s.box, s.box3)}></div>
      </div>
    </div>
  }
}
