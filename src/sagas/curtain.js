import {delay} from 'redux-saga'
import {put} from 'redux-saga/effects'
import createAction, {
  CurtainEntering,
  CurtainLeaving
} from '../actions'

export function* enterCurtain() {
  yield put(createAction(CurtainEntering))
  yield delay(300)
}

export function* leaveCurtain() {
  yield delay(30)
  yield put(createAction(CurtainLeaving))
  yield delay(800)
}

// TODO: Curtain 사이에 yieldable 작동시킬 수 있는 saga 일반화하기
// - yieldable을 인자로 받기
// - 최소한 100ms는 보여주기
// - 많이 delay 될 경우 로딩 인디케이터 보여주기
