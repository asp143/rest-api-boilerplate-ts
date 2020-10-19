import { Router } from 'express';
import { FindOne } from '../controller/User.controller';

const router = Router();

/* GET users listing. */
router.get('/', FindOne);

export default router;
