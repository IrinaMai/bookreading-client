import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import './assets/styles/fonts.css'
import '../node_modules/modern-normalize/modern-normalize.css'
import './assets/styles/index.css'
import App from './components/App'
import store, { persistor } from './redux/store'
import Timer from './components/timer/Timer'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Timer />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
