//Querys que traen la información necesaria

const SELECT_ALL_ENTRIES = "select * from entries"

const SELECT_ALL_ENTRIES_BY_EMAIL = 
        `select entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.email, authors.image
        from entries
        inner join authors on authors.id_author = entries.id_author
        where authors.email = $1;`

const UPDATE_ENTRIES_BY_TITLE = 
        `update entries
        set title = $1, content = $2, date = $3, id_author = $4, category = $5
        where title = $6
        `
const DELETE_ENTRIES_BY_TITLE = 
        `delete from entries
        where title = $1
        `

const CREATE_TABLE_ENTRIES = 
        `CREATE TABLE entries (
        id_entry serial NOT NULL PRIMARY KEY, 
        title varchar(100) NOT NULL, 
        content text NOT NULL, 
        date date DEFAULT CURRENT_DATE,
        id_author int,
        category varchar(15),
        FOREIGN KEY (id_author) REFERENCES authors(id_author)
        )`

const DELETE_TABLE_ENTRIES =  `DROP TABLE entries`

export {
    SELECT_ALL_ENTRIES,
    SELECT_ALL_ENTRIES_BY_EMAIL,
    UPDATE_ENTRIES_BY_TITLE,
    DELETE_ENTRIES_BY_TITLE,
    CREATE_TABLE_ENTRIES,
    DELETE_TABLE_ENTRIES,
}
