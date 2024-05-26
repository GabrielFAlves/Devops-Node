const bcrypt = require('bcrypt');

class UsersBCriptyService {

    constructor(password) {
        this.password = password;
        this.passwordCripty = undefined;
    }

    gerarCriptografia() {
        const salt = 10;
        this.passwordCripty = bcrypt.hashSync(this.password, salt);
        return this.passwordCripty;
    }

    checkCriptografia(passwordtest) {
        return bcrypt.compareSync(passwordtest, this.passwordCripty);
    }
}

// let objeto = new UsersBCriptyService("123456")
// console.log( objeto.gerarCriptografia());
// console.log(objeto.checkCriptografia("123456"));

module.exports = UsersBCriptyService;