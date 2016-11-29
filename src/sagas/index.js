import historySaga from './history'
import fontLoader from './fontLoader'

export default function* rootSaga(document, history) {
  console.log('Hello Sagas!')
  yield [
    fontLoader(document),
    historySaga(history)
  ]
}
