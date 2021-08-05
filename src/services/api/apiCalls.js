import axios from 'axios';


export const API = {

    LOGIN: async function (LOGIN_URL, email, password) {

        return (
            await axios.post(LOGIN_URL, { email: email, contrasena: password })
                .then(res => {
                    console.log(res.data);
                    let token = String(res.data.token);
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('ID', email);
                })
        )






    }

};