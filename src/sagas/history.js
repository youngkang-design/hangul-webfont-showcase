import {eventChannel} from 'redux-saga'
import {call, take, put} from 'redux-saga/effects'

import createCommand, {
  SelectFont,
  GoHome
} from '../commands'

const routes = [
  [/\/fonts\/(.+)/, function*(fontFamily) {yield put(createCommand(SelectFont, fontFamily))}],
  [/.*/, function*() {yield put(createCommand(GoHome))}]
]

export default function* (window) {
  const chan = yield call(hashChangeChannel, window)
  yield call(router, getHashFromUrl(window.location.href))
  while (true) {
    const hash = yield take(chan)
    yield call(router, hash)
  }
}

function* router(hash) {
  let matched = null
  let i = 0
  for (; i<routes.length; i++) {
    matched = hash.match(routes[i][0])
    if (matched) break
  }
  // assume there is always one match at least
  yield routes[i][1](...matched.slice(1))
}

function getHashFromUrl(url) {
  return decodeURI(url).split('#')[1] || ''
}

function hashChangeChannel(window) {
  return eventChannel(emit => {
    const listener = e => {
      emit(getHashFromUrl(e.newURL))
    }
    window.addEventListener('hashchange', listener)
    return () => {
      window.removeEventListener('hashchange', listener)
    }
  })
}
