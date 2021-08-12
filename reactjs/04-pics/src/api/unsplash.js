import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID 9wk1cpi99iahO1cmE3ASYMKdgFKrfMC3s-FrANCgRuk'
    }
});