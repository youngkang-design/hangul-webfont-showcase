import historySaga from './history'
import fontLoader from './fontLoader'
import home from './home'
import mobile from './mobile'

export default function* rootSaga(window) {
  yield [
    fontLoader(window, document),
    historySaga(history),
    home(),
    mobile(window)
  ]
}
