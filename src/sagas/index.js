import historySaga from './history'
import fontLoader from './fontLoader'
import home from './home'

export default function* rootSaga(document, history) {
  console.log('Hello Sagas!')
  yield [
    fontLoader(document),
    historySaga(history),
    home(),
  ]
}
