import express from "express";
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

import { addUser, deleteUser, getUsers, updateUser } from "../Action/user.js";

const nameFile = fileURLToPath(import.meta.url);
const directName = path.dirname(nameFile);

const router = express.Router();
router.use(express.json());
router.use(cors());
router.use('/public/images', express.static(path.join(directName, '/public/images')));

// UPLOAD
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(directName, '/public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single('imagem');

router.get("/", getUsers);
router.post("/", upload, addUser);
router.put("/:id", upload, updateUser);
router.delete("/:id", deleteUser);

export default router;
