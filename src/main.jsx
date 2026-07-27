import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { ToastProvider } from './contexts/ToastContext.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AppRoutes from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <Provider store={store}>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </Provider>
    </AuthProvider>
  </ThemeProvider>
)
