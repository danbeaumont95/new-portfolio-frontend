const axios = require('axios');

const register = async (firstName, lastName, email, username, password, onMailingList) => {
    // const res = await axios.post('http://localhost:3001/api/users/register', {
        const res = await axios.post('https://dan-beaumont-portfolio-backend.herokuapp.com/api/users/register', {
        firstName,
        lastName,
        email,
        username,
        password,
        onMailingList
    });
    console.log(res, 'res register')
    return res
};

const login = async (email, password) => {
    const res = await axios.post('https://dan-beaumont-portfolio-backend.herokuapp.com/api/users/login', {
        email, 
        password
    });
    console.log(res, 'res log in')
    return res;
}

export default {
    register,
    login
}