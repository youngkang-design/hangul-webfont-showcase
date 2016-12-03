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
    const {payload: family} = yield take(SelectFont)
    yield call(window.ga, 'send', 'event', 'SelectFont', family)
  }
}
