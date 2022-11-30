import cors from "cors"
import express from "express"
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())

const port = 3080

app.get("/", (req, res) => {
  res.send("Hello server")
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`)
})