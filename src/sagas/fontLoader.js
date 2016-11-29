import {takeEvery} from 'redux-saga'
import {put} from 'redux-saga/effects'

import {SelectFont} from '../commands'
import createAction, {HomeLeaved, FontChanged} from '../actions'
import data from '../data.yml'
import {getFontItem} from '../utils'

export default function* fontLoader(document) {
  yield takeEvery(SelectFont, loadFont, document)
}

function* loadFont(document, {payload: {groupIndex, itemIndex}}) {
  const {url, family} = getFontItem(data, groupIndex, itemIndex)
  if (url) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
  }
  yield put(createAction(FontChanged, {groupIndex, itemIndex}))
  yield put(createAction(HomeLeaved))
}
