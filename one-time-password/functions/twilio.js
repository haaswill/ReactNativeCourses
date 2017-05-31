const twilio = require('twilio');

const accountSid = 'AC15c92e1a1c9da78be7d35ce6fd51af72';
const authToken = 'e712c2fdee6d2d6c3bf38adbbd2de5b2';

module.exports = new twilio.Twilio(accountSid, authToken);
