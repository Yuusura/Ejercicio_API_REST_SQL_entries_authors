//app.js -> controller.js -> model.js -> queries.js -> config
import routerEntries from "./routes/entries.routes.js"
import routerAuthors from "./routes/authors.routes.js"

import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 3001

app.use(express.json()); //NECESARIO para leer "body" en formato json
app.use(morgan('tiny'))

app.use("/api/entries", routerEntries)
app.use("/api/authors", routerAuthors)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
