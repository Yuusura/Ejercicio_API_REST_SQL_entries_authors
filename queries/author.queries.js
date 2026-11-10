const SELECT_ALL_AUTHORS = "select * from authors"

const SELECT_ALL_AUTHORS_BY_EMAIL = 
        `select *
        from authors
        where authors.email = $1;`

const UPDATE_AUTHORS_BY_ID = 
        `update authors
        set name = $1, surname = $2, email = $3, image = $4
        where id_author = $5
        `
const DELETE_AUTHORS_BY_EMAIL = 
        `delete from authors
        where email = $1
        `

const CREATE_TABLE_AUTHORS = 
        `CREATE TABLE authors (
        id_author serial NOT NULL PRIMARY KEY, 
        name varchar(45) NOT NULL, 
        surname varchar(45) NOT NULL, 
        email varchar(100) NOT NULL UNIQUE,
        image varchar(255)
        );`

const DELETE_TABLE_AUTHORS =  `DROP TABLE authors`

const INSERT_INTO_AUTHORS = 
        `INSERT INTO authors (name, surname, email, image)
        VALUES ($1, $2, $3, $4);`

export {
    SELECT_ALL_AUTHORS,
    SELECT_ALL_AUTHORS_BY_EMAIL,
    UPDATE_AUTHORS_BY_ID,
    DELETE_AUTHORS_BY_EMAIL,
    CREATE_TABLE_AUTHORS,
    DELETE_TABLE_AUTHORS,
    INSERT_INTO_AUTHORS
}