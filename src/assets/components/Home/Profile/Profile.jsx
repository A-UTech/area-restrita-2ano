import './Profile.css'
import editar from "../../../icons/ic_editar.svg"

const Profile = () => {
    const email = location.state?.email || localStorage.getItem('userEmail') || ''

    return (
        <div className="profile-container">
            <img className="profile-image" src='' alt="Profile" />
            <div>
                <div class='profile-name'>
                    <h4>IGesta</h4>
                    <img src={editar} alt="Editar" />
                </div>
                <p>{email ? `${email}` : 'E-mail não disponível'}</p>
            </div>
        </div>
    )
}

export default Profile