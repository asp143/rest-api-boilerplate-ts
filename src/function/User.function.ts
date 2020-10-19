import Response from '../class/Response';
import UserModel from '../model/User.model';

// Types
import type iResponse from '../class/Response';

class User {
    async Find (query: Record<string, unknown>): Promise<iResponse> {
        const response: iResponse = new Response();
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

