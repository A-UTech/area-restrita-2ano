import { useState } from 'react'
import Form from './assets/components/form/form.jsx'
import Title from './assets/components/title/title.jsx'
import Welcome from './assets/components/Welcome/Welcome.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className="welcome-container">
        <Welcome />
      </div>
      <div className="form-container">
        <div className="form-content">
          <Title />
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
