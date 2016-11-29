import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

import s from './global.scss'
import MainNavigation from './connections/MainNavigation'
import Curtain from './connections/Curtain'
import store from './store'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <MainNavigation/>
          <Curtain/>
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
}

window.render = render;
