import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'prismjs/prism'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'nprogress/nprogress.css'
import './assets/css/fonts.css'
import './assets/css/prism.css'
import './assets/css/ar.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { enableES5 } from 'immer'
import * as serviceWorker from './serviceWorkerRegistration'
import store from './store'
import { SettingsProvider } from './contexts/SettingsContext'
import App from './App'
import { /* initServiceWorker, */ onCheckUpdateServiceWorker } from './slices/sWorker'

// import reportWebVitals from './reportWebVitals';

enableES5()
ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register({
  // onSuccess: () => store.dispatch(initServiceWorker()),
  onUpdate: (reg) => {
    console.log('onUpdate callback', reg)
    store.dispatch(onCheckUpdateServiceWorker(reg))
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
