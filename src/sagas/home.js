import {takeEvery, delay} from 'redux-saga'
import {put} from 'redux-saga/effects'

import {
  GoHome
} from '../commands'
import createAction, {
  HomeArrived,
} from '../actions'
import {
  enterCurtain,
  leaveCurtain
} from './curtain'

export default function* () {
  yield takeEvery(GoHome, homeSaga)
}

function* homeSaga() {
  yield enterCurtain()
  yield put(createAction(HomeArrived))
  yield delay(100)
  yield leaveCurtain()
}
