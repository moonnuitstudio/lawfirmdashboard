import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import DashboardLayout from "./Layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={< Dashboard/>} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
