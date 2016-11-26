import React from 'react'
import s from './FontGroup.sass'
import {leftpad} from '../../utils'

export default class FontGroup extends React.Component {
  render() {
    const {
      groupTitle,
      fontNames,
    } = {
      groupTitle: "돋움체∙SANS-SERIF",
      fontNames: [
        "고도체",
        "나눔고딕",
        "나눔바른고딕",
        "나눔스퀘어",
        "바른돋움체",
        "본고딕",
        "스포카 한 산스",
        "아리따 돋움",
        "청소년체",
        "푸른전남체",
        "함초롬돋움",
        "THE 명품고딕",
        "THE 정고딕",
      ]
    }
    return <div>
      <div className={s.title}>{groupTitle}</div>
      <div>
        {fontNames.map((name, index) => <div key={name} className={s.item}>
          <div className={s.number}>{leftpad('0', 2, (index + 1).toString())}</div>
          <div className={s.fontName}>{name}</div>
        </div>)}
      </div>
    </div>
  }
}
