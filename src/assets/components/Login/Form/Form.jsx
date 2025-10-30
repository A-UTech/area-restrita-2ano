import { useState } from 'react'
import axios from 'axios'
import './Form.css'

const API_AUTH_URL = 'https://api-sql-igesta-2ano.onrender.com/igesta/auth/login';
const API_TIPO_URL = 'https://api-sql-igesta-2ano.onrender.com/igesta/user/tipo-usuario/login';

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    // Regex simples para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage('Formato de e-mail inválido.')
      return
    }

    setLoading(true)

    const payload = {
      emailCnpj: email,
      senha: password
    }

    try {
      const authResponse = await axios.post(API_AUTH_URL, payload)
      const token = authResponse.data.token

      if (!token) {
        throw new Error('Token não retornado pela API.')
      }

      localStorage.setItem('authToken', token)

      const tipoResponse = await axios.post(API_TIPO_URL, payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const userType = tipoResponse.data.tipoUsuario

      if (userType === 'admin') {
        localStorage.setItem('userRole', userType)
        window.location.href = '/home'
      } else {
        setMessage('Acesso restrito. Apenas administradores podem entrar.')
      }

    } catch (error) {
      console.error('Erro de login:', error)

      if (error.response) {
        setMessage(error.response.data.message || 'Erro de autenticação.')
      } else if (error.request) {
        setMessage('Erro de conexão com o servidor.')
      } else {
        setMessage('Erro inesperado ao tentar logar.')
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ color: 'white' }}>{message}</h3> {/* mensagem branca */}

      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="login"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      <p>Esqueceu sua senha? <span>Redefinir</span></p>
    </form>
  )
}

export default Form
