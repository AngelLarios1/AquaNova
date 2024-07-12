import { Server } from 'azle';
import express from "express";


export default Server(() => {
    const app = express();
    app.use(express.json());
    const sensord = {
        lunes: {
            humedad: [10, 5],
            riego: [10, 3]
        },
    };
    

    app.get('/users', (req, res) => {
        const users = [
            {
                name: "Juanito",
                edad: 25
            },
            {
                name: "Angelito",
                edad: 22
            },
            {
                name: "Josesito",
                edad: 24
            },
            {
                name: "Manuelito",
                edad: 27
            },
            {
                name: "Abelardito",
                edad: 30
            },
        ];
        return res.status(200).json(users)
    })

    app.get('/get-data',(req,res)=>{
        return res.json(sensord)
    })

    return app.listen();
})