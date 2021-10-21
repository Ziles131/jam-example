import { getData } from '../fetchService';

class UserService {
  static async login(req, loginData) {
    const response = await getData({
      path: '/login',
      options: {
        method: 'POST',
        data: loginData,
      },
    });
    return response.data;
  }
}

export default UserService;