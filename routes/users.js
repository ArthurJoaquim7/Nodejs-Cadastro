import express from "express"
import { addUser, deleteUser, getUsers, updateUser } from "../Action/user.js";

const router = express.Router()
const port = process.env.PORT || 8081;
router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router