class UsersModel {

  constructor(id, name, email, password, status, uuid, dateCreated) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = status;
    this.uuid = uuid;
    this.dateCreated = dateCreated;
  }

}

export default UsersModel;