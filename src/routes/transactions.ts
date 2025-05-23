import { knex } from "../database.js";
import { FastifyInstance } from "fastify";


export async function transactionsRoutes(app: FastifyInstance) {
    
    app.post('/', async (request) => {
        request.body

        
    })
}