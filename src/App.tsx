import { Routes, Route } from "react-router-dom";
import './App.css'
import CommonPage from './pages/CommonPage'
import RegistrationPage from './pages/RegistrationPage'

function Home() {
  return (
    <div>
      <h1>Actuellement sur l'accueil</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route element={<CommonPage />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
