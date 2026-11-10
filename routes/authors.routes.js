import { getAllAuthors, putAuthors, deleteAuthors, postAuthors } from "../controllers/author.controller.js"

import express from 'express'; //SIEMPRE para crear rutas en express
const router = express.Router();

router.get("/", getAllAuthors)
router.put("/", putAuthors)
router.delete("/", deleteAuthors)
router.post("/", postAuthors)


export default router