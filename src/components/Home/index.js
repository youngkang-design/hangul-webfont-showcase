import React from 'react'
import classNames from 'classnames'

import s from './Home.sass'
import data from '../../data.yml'
import Footer from '../Footer'
import FontSelector from '../FontSelector'

export default class Home extends React.Component {
  render() {
    const {onFontSelected} = this.props
    return <div className={s.wrap}>
      <div className={s.title}>한글 웹폰트 글꼴보기집</div>
      <div className={s.description}>
        <div>한글 웹폰트 글꼴보기집은 사이드 프로젝트의 일환으로 작업된 한글 본문용 글꼴 미리보기 웹 페이지이다. 다양한 글꼴을 소개하며, 글꼴의 다운로드 링크와 라이선스 정보, 미리보기를 제공한다. 또한, 글꼴이 각 디바이스에 렌더링 된 예시를 이미지 파일과 함께 제공한다.</div>
        <div>이 도구가 다양한 환경에서의 한글 웹 타이포그래피를 다루는 디자이너와 개발자에게 도움이 되길 바란다.</div>
      </div>
      <div className={s.menu}>
        <FontSelector onFontSelected={onFontSelected}></FontSelector>
      </div>
      <Footer />
    </div>
  }
}
