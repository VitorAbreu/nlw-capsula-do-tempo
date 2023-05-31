import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoute } from './routes/memories'
import 'dotenv/config'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(authRoutes)
app.register(memoriesRoute)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
