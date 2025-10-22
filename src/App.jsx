import { useState } from 'react'
import Form from './assets/components/form/form.jsx'
import Title from './assets/components/title/title.jsx'
import './App.css'
import Wordmark from './assets/components/Wordmark/Wordmark.jsx'

function App() {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <Title />
          <Form />
          <Wordmark />
        </div>
      </div>
    </>
  )
}

export default App
