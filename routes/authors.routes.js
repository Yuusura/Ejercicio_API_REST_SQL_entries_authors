import { getAllAuthors, putAuthors, deleteAuthors, postAuthors } from "../controllers/author.controller.js"

import { validateGetAllAuthors, validateEditAuthors, validateDeleteAuthors, validateCreateAuthors } from "../validations/user.validation.js";


import express from 'express'; //SIEMPRE para crear rutas en express
const router = express.Router();

router.get("/", validateGetAllAuthors, getAllAuthors)
router.put("/", validateEditAuthors, putAuthors)
router.delete("/", validateDeleteAuthors, deleteAuthors)
router.post("/", validateCreateAuthors, postAuthors)


export default router