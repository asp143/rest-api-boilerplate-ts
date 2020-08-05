import rxjs from 'rxjs';
import UserFunctions from '../function/User.function';

// Interface
import { Request, Response } from 'express';

class UserController {
    FindOne(req: Request, res: Response) {
        rxjs
            .from(UserFunctions.Find(req.query))
            .subscribe(
                result => {
                    res.status(result.status).json(result);
                },
                error => {
                    res.status(500).json(error);
                }
            );
    }
}

export default new UserController();