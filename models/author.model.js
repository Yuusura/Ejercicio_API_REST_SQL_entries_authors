import { pool } from "../config/db_pgsql.js";
import { SELECT_ALL_AUTHORS, SELECT_ALL_AUTHORS_BY_EMAIL, UPDATE_AUTHORS_BY_ID, DELETE_AUTHORS_BY_EMAIL, INSERT_INTO_AUTHORS } from "../queries/author.queries.js"

async function selectAllAuthors() {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(SELECT_ALL_AUTHORS)
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

async function selectAllAuthorsByEmail(email) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(SELECT_ALL_AUTHORS_BY_EMAIL, [email])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

async function updateAuthors(newName, newSurname, newEmail, newImage, id_author) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(UPDATE_AUTHORS_BY_ID, [newName, newSurname, newEmail, newImage, id_author])

    } catch (e) {
        throw e
    } finally {
        client?.release()
    }

    return result.rows
}

async function deleteAuthorsByEmail(email) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(DELETE_AUTHORS_BY_EMAIL, [email])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

async function insertAuthors(name, surname, email, image) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(INSERT_INTO_AUTHORS, [name, surname, email, image])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

export {
    selectAllAuthors,
    selectAllAuthorsByEmail,
    updateAuthors,
    deleteAuthorsByEmail,
    insertAuthors
}
