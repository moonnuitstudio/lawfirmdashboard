import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux"
import store from "./store"
import themeApp from "./themeApp"

import DashboardLayout from "./Layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import MattersPage from "./pages/MattersPage";

import AuthorizePage from "./pages/AuthorizePage";

import Loadscreen from "./components/Loadscreen";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <ThemeProvider theme={themeApp}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={< Dashboard/>} />
              <Route path="matters" element={< MattersPage/>} />
            </Route>

            <Route path="authorize" element={<AuthorizePage />} />
          </Routes>

          <Loadscreen/>
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </Router>
  )
}

export default App
