import React from 'react'
import classNames from 'classnames'

import s from './Home.sass'
import data from '../../data.yml'
import FontSelector from '../FontSelector'

export default class Home extends React.Component {
  render() {
    const {onFontSelected} = this.props
    return <div className={s.wrap}>
      <div className={s.title}>한글 웹폰트 글꼴보기집</div>
      <div className={s.description}>
        <div>한글 웹폰트 글꼴보기집은 사이드 프로젝트의 일환으로 작업된 한글 본문용 글꼴 미리보기 웹 페이지이다. 다양한 글꼴을 소개하며, 글꼴의 다운로드 링크와 라이선스 정보, 미리보기를 제공한다. 또한, 글꼴이 각 디바이스에 렌더링 된 예시를 이미지 파일과 함께 제공한다.</div>
        <div>이 도구가 다양한 환경에서의 한글 웹 타이포그래피를 다루는 디자이너와 개발자에게 도움이 되길 바란다.</div>
        <div className={s.notice}>이 페이지에 수록된 모든 글꼴이 무료로 공개되어있지만, 원저작자의 라이선스 가이드를 지켜 사용하길 권장합니다. <br />원저작자의 라이선스 가이드를 어길 경우 법적 책임은 사용한 사람에게 있음을 명시합니다.</div>
      </div>
      <div className={s.menu}>
        <FontSelector onFontSelected={onFontSelected}></FontSelector>
      </div>
    </div>
  }
}
