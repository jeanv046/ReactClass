const { encrypt, decrypt } = require('./crypt')

const generateString = (num) => {
    const cadenaCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let cifrado = '';
    const cadenaCaracteresLength = cadenaCaracteres.length;
    for (let i = 0; i < num; i++) {
        cifrado += cadenaCaracteres.charAt(Math.floor(Math.random() * cadenaCaracteresLength));
    }
    return cifrado;
}

let encriptacion = encrypt(generateString(7)).replace(/==/g,'');
console.log(`Esta es la encriptacion: ${encriptacion}`);
console.log("Esta es la decriptación: " + decrypt(encriptacion))