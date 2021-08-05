import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './login.scss';
import { LOGIN_URL } from '../../utils/constants/constants'
import { API } from '../../services/api/apiCalls';

const Login = () => {
    let history = useHistory();

    const [user, setUser] = useState({
        email: "",
        contrasena: ""
    });
    const [error, setError] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [token, setToken] = useState("");


    //HANDLE INPUT CHANGES
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const { email, contrasena } = user;


    //SUBMIT FORM
    const submitUsuario = (event) => {
        event.preventDefault();

        //Validate email and password
        if (email.trim() === "" || contrasena.trim() === "") {
            setError(true);
            return;
        }
        // To remove alert
        setError(false);


        //FAVOR VERIFICAR ESTA LOGICA
        //LOG IN USER
        (async function logUser() {

            try {

                await API.LOGIN(LOGIN_URL, email, contrasena)
                    .then(res => {
                        setToken(res.data.token);
                        console.log(res.data.token);
                    })
                setUser({
                    email: "",
                    contrasena: ""
                })

            } catch (err) {
                setLoginError(true);
                console.log("error")
            }

        })();



    }



    return (

        <>

            <form onSubmit={submitUsuario} className=" text-center  login-container">
                <div className="container form-container border  text-center">
                    <h3 className="my-4">Bienvenido</h3>
                    {error ? <p className="warning">Todos los campos son obligatorios</p> : null}
                    <div className="form-floating mb-3 my-3">
                        <input type="email" onChange={handleChange} name="email" className="form-control" id="login-email" placeholder="nombre@email.com" />
                        <label for="login-email">Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" onChange={handleChange} name="contrasena" className="form-control" id="login-contrasena" placeholder="Password" />
                        <label for="login-contrasena">Contraseña</label>
                        {loginError ? <p className="warning">Email o contraseña equivocada.</p> : null}
                    </div>

                    <div className="d-flex ">
                        <button className="btn btn-primary mt-4 ms-2" >Ingresar</button>
                        {/* <button className="btn btn-secondary mt-4 ms-2"><Link to="/crear-usuario">Registrarse</Link></button> */}
                    </div>
                </div>
            </form>

            {token ? history.push('/') : null}

        </>
    );
}

export default Login;

