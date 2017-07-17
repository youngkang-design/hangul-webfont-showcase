import React from 'react'
import classNames from 'classnames'

import s from './FontLoadingIndicator.sass'

export default function FontLoadingIndicator({small}) {
  const cls = classNames(s.wrap, small ? s.small : s.large)
  return <div className={cls}>
    <div></div>
    <div></div>
    <div></div>
  </div>
}
