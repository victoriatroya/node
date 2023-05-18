const express = require('express')
const cors = require("cors");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios'

        this.middlewares();

        this.routes()
    }

    middlewares() {

        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo', this.port)
        });
    }
}

module.exports = Server