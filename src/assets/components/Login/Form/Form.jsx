import { useState } from 'react'
import './Form.css'

const Form = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login" type="submit">Entrar</button>
      <p>Esqueceu sua senha? Redefinir</p>
    </form>
  )
}

export default Form