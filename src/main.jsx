import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/style.css'
import { Provider } from 'react-redux'
import { store } from './store.jsx'


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
 <RouterProvider router={router} />

  </Provider>
)
