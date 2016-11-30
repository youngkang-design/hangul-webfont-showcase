import historySaga from './history'
import fontLoader from './fontLoader'
import home from './home'
import mobile from './mobile'

export default function* rootSaga(window) {
  console.log('Hello Sagas!')
  yield [
    fontLoader(window.document),
    historySaga(window.history),
    home(),
    mobile(window)
  ]
}
