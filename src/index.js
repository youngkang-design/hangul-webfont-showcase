import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

import s from './global.scss'
import MainNavigation from './connections/MainNavigation'
import store from './store'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainNavigation/>
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
