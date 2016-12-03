import React, {PropTypes} from 'react'
import classNames from 'classnames'

import data from '../../data.yml'
import s from './FontShowcase.sass'
import FontPreview from '../FontPreview'
import {getFontItem} from '../../utils'
import SVGCaret from './caret.svg'
import FontSelector from '../FontSelector'

export default class FontShowcase extends React.Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    menuState: PropTypes.string,  // nullable
    fontFamily: PropTypes.string.isRequired,
    onMenuOpened: PropTypes.func.isRequired,
    onMenuClosed: PropTypes.func.isRequired
  }
  render() {
    const {fontFamily, mobile, menuState, onMenuOpened, onMenuClosed} = this.props
    const {
      name: fontName,
      desc: fontDescription,
      weightSet,
      download: downloadLink,
      license,
      rendered
    } = getFontItem(data, fontFamily)
    const renderedImages = rendered || []
    const waterfallItems = mobile ? data.waterfall.items.mobile : data.waterfall.items.desktop

    return <div className={s.wrap}>
      <div className={s.topNav}>
        <div className={s.topNavResponsive}>
          <a href="#/" className={s.title}>한글 웹폰트 글꼴보기집</a>
          <div className={s.menuButton} onClick={onMenuOpened}>글꼴 목록<SVGCaret className={s.caret} /></div>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.fontName} style={{fontFamily}}>{fontName}</div>
        <div className={s.fontDescription} style={{fontFamily}}>{fontDescription}</div>
      </div>
      <div className={s.externalLinks}>
        <a target='_blank' className={s.linkButton} href={downloadLink}>다운로드 링크</a>
        <a target='_blank' className={s.linkButton} href={license}>라이선스 정보</a>
      </div>
      <div className={s.previewSection}>
        <div className={classNames(s.areaTitle, s.previewSectionTitle)}>글꼴 미리보기</div>
        {waterfallItems.map(item => {
          const {
            size: fontSize,
            text: exampleText,
            lineHeight,
            letterSpacing
          } = item
          const props = {
            fontFamily,
            fontSize,
            exampleText,
            lineHeight,
            letterSpacing,
            weightSet
          }
          return <div key={fontSize} className={s.fontPreviewWrap}>
            <FontPreview {...props} />
          </div>
        })}
        <div className={s.ReferenceLink}>
          <a href="http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=94013969" target="_blank">우리에게도 계보가 있다 - 외롭지 않은 페미니즘(2016)</a>
        </div>
      </div>
      <div className={s.renderedImageSection}>
        <div className={classNames(s.areaTitle)}>글꼴 렌더링 미리보기</div>
        <div className={s.renderedImageList}>
          {renderedImages.map(({device, file}, index) => <div key={index} className={s.renderedImageItem}>
            <div className={s.deviceName}>{device}</div>
            <img className={s.deviceImage} src={`rendered-images/${file}`} />
          </div>)}
        </div>
      </div>
      <div className={classNames(s.menu, {[s.opening]: menuState === 'opened', [s.closing]: menuState === 'closed'})}>
        <div className={s.menuTitleArea}>
          <div className={s.menuTitle}>한글 웹폰트 글꼴보기집</div>
          <div className={s.menuCloseButton} onClick={onMenuClosed}>
            목록 닫기<SVGCaret className={s.caret} style={{transform: 'scaleY(-1)'}} />
          </div>
        </div>
        <div className={s.fontSelectorWrap}>
          <FontSelector asSlideMenu></FontSelector>
        </div>
        <div className={s.menuPadding}></div>
      </div>
    </div>
  }
}
