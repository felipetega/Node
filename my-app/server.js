import { createServer } from "node:http";

const server = createServer((req, res)=>{
    console.log("Oi")

    return res.write('oi')
})

server.listen(3000)