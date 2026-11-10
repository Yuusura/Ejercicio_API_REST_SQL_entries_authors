//SOLO Llamada a la base de datos utilizando la query definida


import { pool } from "../config/db_pgsql.js";
import { SELECT_ALL_ENTRIES, SELECT_ALL_ENTRIES_BY_EMAIL, UPDATE_ENTRIES_BY_TITLE, DELETE_ENTRIES_BY_TITLE } from "../queries/entries.queries.js"



async function selectAllEntries() {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(SELECT_ALL_ENTRIES)
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

async function selectAllEntriesByEmail(email) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(SELECT_ALL_ENTRIES_BY_EMAIL, [email])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

async function updateEntries(newTitle, newContent, newDate, newId_author, newCategory, oldTitle) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(UPDATE_ENTRIES_BY_TITLE, [newTitle, newContent, newDate, newId_author, newCategory, oldTitle])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }

    return result.rows
}

async function deleteEntriesByTitle(title) {
    let client, result;
    try {
        client = await pool.connect();
        result = await client.query(DELETE_ENTRIES_BY_TITLE, [title])
    } catch (e) {
        throw e
    } finally {
        client?.release()
    }
    return result.rows
}

export { selectAllEntries, selectAllEntriesByEmail, updateEntries, deleteEntriesByTitle }
