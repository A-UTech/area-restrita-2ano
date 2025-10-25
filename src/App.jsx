import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './assets/pages/Login/Login'
import Home from './assets/pages/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App