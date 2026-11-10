import { selectAllAuthors, selectAllAuthorsByEmail, updateAuthors, deleteAuthorsByEmail, insertAuthors } from "../models/author.model.js";

async function getAllAuthors(req, res) {
        try {
        if (req.query.email) {
            const email = req.query.email
            const entries = await selectAllAuthorsByEmail(email)
            res.status(200).json(entries)
        } else {
            const entries = await selectAllAuthors()
            res.status(200).json(entries)
        }
    } catch (error) {
        console.error("Error al consultar authors:", error.message)
        res.status(500).json({ error: "No se pudieron obtener los autores" })
    }
}

async function putAuthors(req, res) {
    try {
        const authorsData = req.body
        
        const {name, surname, email, image, id_author} = authorsData
        await updateAuthors(name, surname, email, image, id_author)

        res.status(200).json({ message: `usuario actualizado: ${email}` })
    } catch (error) {
        console.error("Error al actualizar author:", error.message)
        res.status(500).json({ error: "No se pudo actualizar el autor" })
    }
}

async function deleteAuthors(req, res) {
    try {
        const authorsData = req.query
        
        const {email} = authorsData
        await deleteAuthorsByEmail(email)

        res.status(200).json({
            message: `Se ha borrado ${email}`
        })
    } catch (error) {
        console.error("Error al consultar entries:", error.message)
        res.status(500).json({ error: "No se pudieron obtener las entries" })
    }
}

async function postAuthors(req, res) {
    try {
        const authorsData = req.body
        
        const {name, surname, email, image} = authorsData
        await insertAuthors(name, surname, email, image)

        res.status(200).json({
            message: `Usuario creado ${email}`
        })
    } catch (error) {
        console.error("Error al consultar entries:", error.message)
        res.status(500).json({ error: "No se pudieron obtener las entries" })
    }
}

export {
    getAllAuthors,
    putAuthors,
    deleteAuthors,
    postAuthors
}
