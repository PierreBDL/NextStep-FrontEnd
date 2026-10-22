import { Routes, Route } from "react-router-dom";
import './App.css'
import CommonPage from './pages/CommonPage'

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
        <Route element={<CommonPage />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
