import { Profile } from '../views/profile.js';

new Profile({ ...JSON.parse(localStorage.getItem('sessionUser')) }).render(document.querySelector('#profile'));