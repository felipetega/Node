import fastify from 'fastify'
import { prisma } from './lib/prisma'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app.listen({
    port:3000
}).then(()=>{
    console.log('Rodando')
})