import React, {PropTypes} from 'react'

import data from '../../data.yml'
import s from './FontShowcase.sass'
import FontPreview from '../FontPreview'
import {getFontItem} from '../../utils'

export default class FontShowcase extends React.Component {
  static propTypes = {
    groupIndex: PropTypes.number.isRequired,
    itemIndex: PropTypes.number.isRequired,
    onTitleClicked: PropTypes.func.isRequired
  }
  render() {
    const {groupIndex, itemIndex, onTitleClicked} = this.props
    const {name: fontName, desc: fontDescription, family: fontFamily} = getFontItem(data, groupIndex, itemIndex)
    console.log(fontFamily)
    return <div>
      <div className={s.topNav}>
        <div className={s.title} onClick={onTitleClicked}>한글 웹폰트 글꼴보기집</div>
        <div className={s.menuButton}>글꼴 목록</div>
      </div>
      <div className={s.content}>
        <div className={s.fontName} style={{fontFamily}}>{fontName}</div>
        <div className={s.fontDescription} style={{fontFamily}}>{fontDescription}</div>
      </div>
      <div className={s.externalLinks}>
        <div className={s.linkButton}>다운로드 링크</div>
        <div className={s.linkButton}>라이선스 정보</div>
      </div>
      <div className={s.preview}>
        <div className={s.areaTitle} style={{marginTop: '20px'}}>글꼴 미리보기</div>
        <FontPreview></FontPreview>
      </div>
      <div className={s.rendering}>
        <div className={s.areaTitle} style={{marginTop: '24px'}}>렌더링 예시</div>
      </div>
    </div>
  }
}
