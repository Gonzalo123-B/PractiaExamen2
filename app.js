// Imports
const cors = require('cors');
const helmet = require ('helmet');
const morgan = require ('morgan');
const express = require('express');

const path = require('path');

const app = express();

require("dotenv").config()
const port = process.env.PORT || 3000

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.get("*"), (req, res) => {
    res.status(404).send("no se encontro la ruta indicada");
}

// Starting the server
app.listen(port, () => console.log(`Server en el puerto ${port}`));