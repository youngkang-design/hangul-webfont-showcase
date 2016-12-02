import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

import s from './global.sass'
import MainNavigation from './connections/MainNavigation'
import Footer from './components/Footer'
import Curtain from './connections/Curtain'
import store from './store'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div className={s.wrap}>
          <MainNavigation/>
          <Curtain/>
          <Footer/>
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./connections/MainNavigation', render)
  module.hot.accept('./connections/Curtain', render)
  module.hot.accept('./global.sass', render)
}
