class Users {

    constructor(id, name, password, email, status, uuid, dataCreated) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.status = status;
        this.uuid = uuid;
        this.dataCreated = dataCreated;
    }

    toString() {
        return `Id: ${this.id}, Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`;
    }

}

module.exports = Users;

// let user = new Users(1, 'John Doe', '1233', 'gabriel@gmail.com');
// console.log(user.toString());