import './Profile.css'
import editar from "../../../icons/ic_editar.svg"
import { useState } from 'react'

const Profile = () => {
  const email = location.state?.email || localStorage.getItem('userEmail') || ''
  const [name, setName] = useState(localStorage.getItem('userName') || 'IGesta')
  const [editing, setEditing] = useState(false)
  const [tempName, setTempName] = useState(name)

  const handleSave = () => {
    setName(tempName)
    localStorage.setItem('userName', tempName)
    window.dispatchEvent(new Event('storage')) // 🔄 força atualização no Hello
    setEditing(false)
  }

  const handleCancel = () => {
    setTempName(name)
    setEditing(false)
  }

  return (
    <div className="profile-container">
      <div>
        <div className="profile-name">
          {editing ? (
            <div className="edit-area">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="name-input"
              />
              <div className="button-group">
                <button className="save-btn" onClick={handleSave}>Salvar</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancelar</button>
              </div>
            </div>
          ) : (
            <>
              <h4>{name}</h4>
              <img src={editar} alt="Editar" onClick={() => setEditing(true)} />
            </>
          )}
        </div>
        <p>{email ? `${email}` : 'E-mail não disponível'}</p>
      </div>
    </div>
  )
}

export default Profile
