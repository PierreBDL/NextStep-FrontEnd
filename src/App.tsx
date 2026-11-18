import { Routes, Route } from "react-router-dom";
import './App.css'
import CommonPage from './pages/CommonPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<CommonPage />}>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
