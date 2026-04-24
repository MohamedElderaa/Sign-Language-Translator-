
import axios from 'axios';

const api = 'http://ahmed11.runasp.net/api/account/register';

// Weak password to trigger 400
const payload = {
    userName: 'TestUserDebug2',
    email: 'testdebug2@example.com',
    password: '123',
    confirmPassword: '123'
};

console.log('Testing Sign-Up with BAD payload:', payload);

async function test() {
    try {
        const res = await axios.post(api, payload);
        console.log('SUCCESS:', res.data);
    } catch (err) {
        if (err.response) {
            console.log('ERROR STATUS:', err.response.status);
            console.log('ERROR DATA:', JSON.stringify(err.response.data, null, 2));
        } else {
            console.log('ERROR:', err.message);
        }
    }
}

test();
