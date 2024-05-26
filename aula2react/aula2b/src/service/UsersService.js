import axios from "axios";

const API = "http://localhost:4001/api/user";

class UserService {
  
    static async createUser(user) {
        try {
            const resp = await axios.post(API, user);
            return resp.data;
        }catch(error){
            throw error;
        }
    }
}

export default UserService;