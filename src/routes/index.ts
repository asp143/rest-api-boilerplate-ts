import express from 'express';

import userRouter from './users';

const app = express.Router();

app.use('/user', userRouter);

export default app;
