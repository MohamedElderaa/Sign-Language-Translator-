
import axios from 'axios';

const api = 'http://ahmed11.runasp.net/api/account/register';

const payload = {
    userName: 'TestUserDebug1',
    email: 'testdebug1@example.com',
    password: 'Password@123',
    confirmPassword: 'Password@123'
};

console.log('Testing Sign-Up with:', payload);

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
