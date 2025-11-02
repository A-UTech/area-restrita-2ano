import './Hello.css'
import { useState, useEffect } from 'react'

const Hello = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || 'IGesta')

  useEffect(() => {
    const updateName = () => {
      setName(localStorage.getItem('userName') || 'IGesta')
    }

    window.addEventListener('storage', updateName)
    return () => window.removeEventListener('storage', updateName)
  }, [])

  return (
    <div className="hello-container">
      <h1>Olá, {name}!</h1>
      <h3>Área restrita</h3>
    </div>
  )
}

export default Hello
