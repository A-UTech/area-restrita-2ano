import igestinha from '../../igestinha.png'
import './Welcome.css'

const Welcome = () => {
    return (
        <div class="welcome-container">
            <img src={igestinha} alt="Igestinha" />
            <h1>Olá, <br></br> bem-vindo!</h1>
        </div>
    )
}

export default Welcome