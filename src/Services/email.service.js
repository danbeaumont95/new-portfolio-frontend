import axios from 'axios';

const postEmail = (subject, text, senderEmail) => {
    // return axios.post('http://localhost:3001/api/email/sendEmailToDan', {
        return axios.post('https://dan-beaumont-portfolio-backend.herokuapp.com/api/email/sendEmailToDan', {
        subject, text, senderEmail
    })
};

export default {
    postEmail
}