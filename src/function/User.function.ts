import Response from '../class/Response';
import UserModel from '../model/User.model';

class User {
    async Find (query: any): Promise<Response> {
        const response = new Response();
        try {
            const result = await UserModel.find(query);
            response.setPayload(200, result);
            return response;
        } catch (error) {
            response.setFailed(500, error);
            return response;
        }
    }
}

export default new User();

