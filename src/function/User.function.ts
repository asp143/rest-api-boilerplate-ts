import Response from '../class/Response';
import UserModel from '../model/User.model';

// Types
import type iResponse from '../class/Response';
import BaseFunction from './Base.function';

class User extends BaseFunction {
    async Find (query: Record<string, unknown>): Promise<iResponse> {
        const response: iResponse = new Response();
        this.logger.info('test');
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

