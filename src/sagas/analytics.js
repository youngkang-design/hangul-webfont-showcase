import {take, call} from 'redux-saga/effects'

import {SelectFont} from '../commands'
import data from '../data.yml'
import {getFontItem} from '../utils'

export default function* (window) {
  if (process.env.NODE_ENV === 'production') {
    yield production(window)
  }
}

function* production(window) {
  yield call(window.ga, 'create', 'UA-43289302-5', 'auto');
  yield call(window.ga, 'send', 'pageview');
  while (true) {
    const {payload: {groupIndex, itemIndex}} = yield take(SelectFont)
    const {family} = getFontItem(data, groupIndex, itemIndex)
    yield call(window.ga, 'send', 'event', 'SelectFont', family)
  }
}
