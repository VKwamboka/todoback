import { Router } from "express";
import { Homepage, loginUser, RegisterUser } from "../controllers/auth";
import { VerifyToken } from "../middlewares/verifyToken";



const authrouter =Router()

authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter