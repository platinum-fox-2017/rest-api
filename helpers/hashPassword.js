const crypto = require('crypto');
const secret = 'fadhilmch'

function hashPassword(password){
    const hash = crypto.createHmac('sha256', secret)
       .update(password)
       .digest('hex');
    return hash;
}

module.exports = hashPassword;
