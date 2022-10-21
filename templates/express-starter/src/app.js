import express from 'express'
import cors from 'cors'
import routeHome from './routes/home.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', routeHome)



export default app;