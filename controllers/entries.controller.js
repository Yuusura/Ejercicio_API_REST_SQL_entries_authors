//Ejecuta la lógica de nuestro modelo

import { selectAllEntries, selectAllEntriesByEmail, updateEntries, deleteEntriesByTitle } from "../models/entries.model.js";

async function getAllEntries(req, res) {
    try {
        if (req.query.email) {
            const email = req.query.email
            const entries = await selectAllEntriesByEmail(email)
            res.json(entries)
        } else {
            const entries = await selectAllEntries()
            res.json(entries)
        }
    } catch (error) {
        console.error("Error al consultar entries:", error.message)
        res.status(500).json({ error: "No se pudieron obtener las entries" })
    }
}

async function editEntries(req, res) {
    try {
        const entriesData = req.body
        console.log(req.body);
        
        const {title, content, date, id_author, category, oldTitle} = entriesData
        await updateEntries(title, content, date, id_author, category, oldTitle)

        res.status(200).json({
            message: `Se ha modificado la entry '${oldTitle}'`
        })
    } catch (error) {
        console.error("Error al consultar entries:", error.message)
        res.status(500).json({ error: "No se pudieron obtener las entries" })
    }
}

async function deleteEntries(req, res) {
    try {
        const entriesData = req.query
        
        const {title} = entriesData
        await deleteEntriesByTitle(title)

        res.status(200).json({
            message: `Se ha borrado la entry ${title}`
        })
    } catch (error) {
        console.error("Error al consultar entries:", error.message)
        res.status(500).json({ error: "No se pudieron obtener las entries" })
    }
}

export { getAllEntries, editEntries, deleteEntries }
