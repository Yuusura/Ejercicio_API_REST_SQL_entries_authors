//Generación de rutas para que el cliente pueda acceder a los datos

import { getAllEntries, editEntries, deleteEntries } from "../controllers/entries.controller.js"

import { validateGetAllEntries, validateEditEntries, validateDeleteEntries } from "../validations/user.validation.js";

import express from 'express'; //SIEMPRE para crear rutas en express
const router = express.Router();

router.get("/", validateGetAllEntries, getAllEntries)
router.put("/", validateEditEntries, editEntries)
router.delete("/", validateDeleteEntries, deleteEntries)

export default router
