const express = require ('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
const sensord = {
    lunes: {
        humedad: [10, 5],
        riego: [10, 3]
    },
};
app.get('api/sensor-d/:regist',(req, res) =>{
        const {regist} = req.params;
        if(sensord[regist]){
            res.json(sensord[regist]);
        }else {
            res.status(404).json({ error:"No se encuentran los datos"})
        }
});

app.listen(PORT, () =>{
    console.log(`El servidor se ah iniciado en el puerto: ${PORT}`)
});