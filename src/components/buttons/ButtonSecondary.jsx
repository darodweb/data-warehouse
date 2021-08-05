import './ButtonSecondary.scss';
import { Link } from 'react-router-dom';



const ButtonSecondary = ({ text, target, action }) => {

    return (

        <>
            <li className="nav-link text-light  header-menu-links mx-2" aria-current="page"><Link to={target}><span className="login" onClick={action}>{text}</span></Link></li>

        </>
    );
}

export default ButtonSecondary;