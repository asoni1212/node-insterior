import express from "express";
import {getAllUserData, getUserDataByID} from "../controllers/userController.js";

const router = express.Router();
// Get a list of all users
router.get('/', getAllUserData);
router.get('/getUser', getUserDataByID);

export default router;