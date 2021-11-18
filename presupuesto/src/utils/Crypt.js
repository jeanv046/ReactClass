const CryptoJS = require('crypto-js');

const encrypt = (text) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

const decrypt = (data) => {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };