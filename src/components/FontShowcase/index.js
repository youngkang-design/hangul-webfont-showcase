import React, {PropTypes} from 'react'
import classNames from 'classnames'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import xml from 'react-syntax-highlighter/dist/languages/xml';
import css from 'react-syntax-highlighter/dist/languages/javascript';

import data from '../../data.yml'
import s from './FontShowcase.sass'
import FontPreview from '../FontPreview'
import {getFontItem} from '../../utils'
import SVGCaret from './caret.svg'
import FontSelector from '../FontSelector'

registerLanguage('xml', xml)
registerLanguage('css', css)

// highlight.js style sample: https://github.com/conorhastings/react-syntax-highlighter/blob/master/src/styles/docco.js
const hljsStyle = {
  'hljs': {
    'display': 'block',
    'color': '#747a7e',
    'fontFamily': `'Fira Code', monospace`,
    'whiteSpace': 'pre-wrap',
    'fontSize': '15px',
    'lineHeight': '1.8',
    'overflowWrap': 'break-word'
  },
  'hljs-keyword': {
    'color': '#747a7e'
  },
  'hljs-string': {
    'color': '#1cad73'
  },
  'hljs-attribute': {
    'color': '#56e3b0'
  },
  'hljs-tag': {
    'color': '#56e3b0'
  },
  'hljs-name': {
    'color': '#747a7e'
  }
}

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
      rendered,
      url: stylesheetUrl
    } = getFontItem(data, fontFamily)
    const renderedImages = rendered || []
    const waterfallItems = mobile ? data.waterfall.items.mobile : data.waterfall.items.desktop
    const fontFamilyCssSample = `* { font-family: '${fontFamily}', 'Sans-serif'; }`
    const linkTagSample = `<link href='${stylesheetUrl}' rel='stylesheet' type='text/css'>`
    const cssImportSample = `@import url('${stylesheetUrl}');`
    return <div className={s.wrap}>
      <div className={s.topNav}>
        <div className={s.topNavResponsive}>
          <a href='#/' className={s.title}>한글 웹폰트 글꼴보기집</a>
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
          <a href='http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=94013969' target='_blank'>우리에게도 계보가 있다 - 외롭지 않은 페미니즘(2016)</a>
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
      <div className={s.codeSampleSection}>
        <div className={classNames(s.areaTitle)}>웹폰트로 사용하기</div>
        <div className={s.codeBlockDescription}>{fontName} 폰트를 웹에서 사용하려면 스타일 시트에 아래의 코드를 작성하거나,</div>
        <div className={s.codeBlockWrap}>
          <SyntaxHighlighter language='css' style={hljsStyle}>{cssImportSample}</SyntaxHighlighter>
        </div>
        <div className={s.codeBlockDescription}>혹은 HTML의 &lt;head&gt; 태그 안에 아래의 코드를 작성한다.</div>
        <div className={s.codeBlockWrap}>
          <SyntaxHighlighter language='xml' style={hljsStyle}>{linkTagSample}</SyntaxHighlighter>
        </div>
        <div className={s.codeBlockDescription}>그 다음 &lt;style&gt; 태그 안에 font-family를 설정한다.</div>
        <div className={s.codeBlockWrap}>
          <SyntaxHighlighter language='css' style={hljsStyle}>{fontFamilyCssSample}</SyntaxHighlighter>
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
