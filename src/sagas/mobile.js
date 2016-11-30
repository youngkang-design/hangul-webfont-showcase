import {put} from 'redux-saga/effects'

import data from '../data.yml'
import createAction, {
  MobileModeApplied
} from '../actions'

export default function*(window) {
  if (window.innerWidth <= data.breakpoint) {
    yield put(createAction(MobileModeApplied))
  }
}
