import React from 'react'

import s from './Footer.sass'

export default class Footer extends React.Component {
  render() {
      return <div className={s.wrap}>
        <div className={s.responsive}>
          <a href="http://youngkang.me">강영화</a> 디자인∙<a href="mailto:seungha.me@gmail.com">김승하</a> 도움 <br/>
          이 웹페이지의 저작권은 <a href="http://youngkang.me">강영화</a>에게 있습니다.
        </div>
      </div>
  }
}
