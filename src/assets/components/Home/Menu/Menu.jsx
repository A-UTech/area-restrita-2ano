import './Menu.css'
import logo from '../../../icons/ic_igesta_branco.svg';
import { useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate("/login");
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo IGesta" />
                <h4>IGesta</h4>
            </div>
            <button onClick={ logout } className="navbar_logout">Sair</button>
        </div>
    );
}

export default Menu;