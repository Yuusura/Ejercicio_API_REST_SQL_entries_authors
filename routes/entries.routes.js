//Generación de rutas para que el cliente pueda acceder a los datos

import { getAllEntries, editEntries, deleteEntries } from "../controllers/entries.controller.js"

import express from 'express'; //SIEMPRE para crear rutas en express
const router = express.Router();

router.get("/", getAllEntries)
router.put("/", editEntries)
router.delete("/", deleteEntries)

export default router
