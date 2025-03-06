import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { AuthProvider, UserProvider } from "./context/AuthContext.jsx"
import { Provider } from 'react-redux'
import store from './Redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>

  </StrictMode>,
)
