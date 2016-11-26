import React from 'react';
import s from './Home.sass';
import FontGroup from '../FontGroup'
import data from '../../data.yml'

export default class Home extends React.Component {
  render() {
    return <div>
      <div className={s.title}>한글 웹폰트 글꼴보기집</div>
      <div className={s.description}>
        <div>이 페이지는 한글 본문용 무료 글꼴 미리보기 웹페이지입니다. 다양한 무료 글꼴을 소개하며, 글꼴의 다운로드 링크와 라이선스 정보, 미리보기를 제공합니다. 또한, 글꼴이 각 디바이스에 렌더링 된 예시를 이미지 파일과 함께 제공합니다.</div>
        <div>한글 웹폰트 글꼴보기집이 다양한 환경에서의 한글 웹 타이포그래피를 다루는 디자이너와 개발자에게 도움이 되길 바랍니다.</div>
      </div>
      <div className={s.menu}>
        {data.groups.map((group, index) => <div className={s.fontGroup} key={index}>
          <FontGroup groupIndex={index} groupTitle={group.title} fontNames={group.items.map(i => i.name)}></FontGroup>
        </div>)}
      </div>
      <div className={s.footer}>
        <a href="http://youngkang.me">강영화</a> 디자인∙<a href="mailto:seungha.me@gmail.com">김승하</a> 도움 <br/>
        이 웹페이지의 저작권은 <a href="http://youngkang.me">강영화</a>에게 있습니다.
      </div>
    </div>
  }
}
