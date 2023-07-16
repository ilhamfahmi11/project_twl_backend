import express from "express";
import {
    getUsers, 
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUsers); //mengambil semua data
router.get('/users/:id', getUsersById); // mengambil data pengguna berdasarkan ID
router.post('/users', createUser); // membuat data pengguna baru
router.patch('/users/:id', updateUser); // memperbarui data pengguna berdasarkan ID
router.delete('/users/:id', deleteUser); // menghapus data pengguna berdasarkan ID

export default router;

//mengatur rute