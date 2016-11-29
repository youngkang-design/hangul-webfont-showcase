import {takeEvery, delay} from 'redux-saga'
import {put, race, fork, cancel} from 'redux-saga/effects'
import FontFaceObserver from 'fontfaceobserver'
import {SelectFont} from '../commands'
import createAction, {
  HomeLeaved,
  FontChanged,
  CurtainEntering,
  CurtainLeaving,
  CurtainLoading
} from '../actions'
import data from '../data.yml'
import {getFontItem} from '../utils'

export default function* fontLoader(document) {
  yield takeEvery(SelectFont, loadFont, document)
}

function* loadFont(document, {payload: {groupIndex, itemIndex}}) {
  const {url, family} = getFontItem(data, groupIndex, itemIndex)
  const observer = new FontFaceObserver(family)
  yield put(createAction(CurtainEntering))
  if (url && !isFontLoaded(document, url)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
  }
  yield delay(500)
  const indicatorTask = yield fork(showLoadingIndicator)
  yield observer.load()
  yield cancel(indicatorTask)
  yield put(createAction(FontChanged, {groupIndex, itemIndex}))
  yield put(createAction(HomeLeaved))
  yield put(createAction(CurtainLeaving))
}

function* showLoadingIndicator() {
  yield delay(500)
  yield put(createAction(CurtainLoading))
}

function isFontLoaded(document, url) {
  return !!document.querySelector(`link[href="${url}"]`)
}
