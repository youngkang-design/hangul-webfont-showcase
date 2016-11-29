import React, {PropTypes} from 'react'
import classNames from 'classnames'

import s from './Curtain.sass'
import LoadingIndicator from '../LoadingIndicator'

export default class Curtain extends React.Component {
  render() {
    const {loading, state} = this.props
    const c = classNames(s.wrap, {
      [s.entering]: state === 'entering',
      [s.leaving]: state === 'leaving'
    })
    return <div className={c}>
      <div className={s.inner}>
        {loading ? <div className={s.loading}>
          <LoadingIndicator/>
        </div> : null}
      </div>
    </div>
  }
}
