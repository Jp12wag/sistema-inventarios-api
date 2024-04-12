const express = require('express');
const UserRoute = require('./routers/user');
const ProductosRouter = require('./routers/Productos');
const CategoriaRouter = require('./routers/Categorias');
const RolesRouter = require('./routers/Roles');
const ProveedorRouter = require('./routers/Proveedores');
const UbicacionesRouter = require('./routers/Ubicaciones');
const EntradaRoute= require('./routers/Entrada');
const SalidaRoute= require('./routers/Salida');
const cors = require('cors');


// Conexión a la Base de Datos
require('./db/conexion.js');

const app = express();

// Habilitar CORS
app.use(cors());

const port = 3001;
//app.use(express.static('public'));
app.use(express.json());
app.use(UserRoute);
app.use(RolesRouter);
app.use(ProductosRouter);
app.use(CategoriaRouter);
app.use(ProveedorRouter);
app.use(UbicacionesRouter);
app.use(EntradaRoute);
app.use(SalidaRoute);


//app.use(ProveedorRouter);

app.listen(port, () => {
    console.log('Server running... http://localhost:' + port);
});