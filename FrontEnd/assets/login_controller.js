import { loginUser } from './login_service.js';
import {token_sauvegarde} from './token_service.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user-login-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const user = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value,
        };

        try {
            const data = await loginUser(user);
            console.log("Authentification réussie.", data);

            token_sauvegarde(data)

            // Redirection
            location.href = 'index.html';
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });
});
