import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './routers/AppRouter'

  
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
