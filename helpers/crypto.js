const crypto = require('crypto')
const secret = 'derbyrace'

function hasher (password){
    const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
    return hash
}

module.exports = {
    hasher: hasher
}