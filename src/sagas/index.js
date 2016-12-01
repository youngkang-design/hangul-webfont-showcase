import historySaga from './history'
import fontLoader from './fontLoader'
import home from './home'
import mobile from './mobile'
import analytics from './analytics'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

export default function* rootSaga(window) {
  yield [
    fontLoader(window, document),
    historySaga(history),
    home(),
    mobile(window),
    analytics(window)
  ]
}
