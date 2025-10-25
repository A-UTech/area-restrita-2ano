import { useNavigate } from "react-router-dom"
import Form from '../../components/Login/Form/Form'
import Title from '../../components/Login/Title/Title'
import Wordmark from '../../components/Login/Wordmark/Wordmark'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    if (email && password) {
      navigate("/home", { state: { email: email } })
    } else {
      alert("Por favor, preencha todos os campos")
    }
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <Title />
        <Form onLogin={handleLogin}  />
        <Wordmark />
      </div>
    </div>
  )
}

export default Login