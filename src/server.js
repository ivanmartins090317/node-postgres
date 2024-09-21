const express = require('express');
const router = require('./router')

const app = express()
const PORT = 5000

app.use(express.json())
app.use("/api", router)

app.listen(PORT, () => console.log(`Server running to port ${PORT}`)
)