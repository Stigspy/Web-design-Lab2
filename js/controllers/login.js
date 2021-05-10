import FormReader from '../utils/FormReader.js';
import LSUser from '../models/LSUser.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = FormReader.getData(form);

    if (!data.email.length) {
        alert('Wrong email');
    } else if (/\s/.test(data.password) || !data.password.length || (/[a-zA-Z]/.test(data.password) && !/\d/.test(data.password)) || (!/[a-zA-Z]/.test(data.password) && /\d/.test(data.password))) {
        alert('Wrong password');
    }
    else
    {
        const user = LSUser.findByEmail(data.email);

        if (!user) {
            alert('There is no user');
        } else {
            if (!user.password === data.password) {
                alert('Wrong password');
            } else {
                localStorage.setItem('sessionUser', JSON.stringify(user));
                document.location.href = '/index.html';
            }
        }
    }
});