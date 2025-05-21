import { validateUser } from "../validateUser.js";
import express from 'express'

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserByID);

userRouter.post('/',validateUser, createUser);

userRouter.put('/:id',validateUser, updateUser);

userRouter.delete('/:id', deleteUser);


export default userRouter;
