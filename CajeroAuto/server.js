
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const config = {
    user: "sa",
    password: "Oscar1234",
    server: "localhost\\SQLEXPRESS",
    database: "UsuariosDb",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// conexión global
let pool;

async function conectarDB() {
    try {
        pool = await sql.connect(config);
        console.log("Conectado a SQL Server");
    } catch (err) {
        console.log("Error de conexion:", err);
    }
}

conectarDB();app.get("/loginUsuario", async (req, res) => {
    const nombre = req.query.nombre;

    try {

        const result = await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .query(`
                SELECT nombre
                FROM UsuariosBancoste
                WHERE nombre = @nombre
            `);

        if (result.recordset.length > 0) {
            res.json({ ok: true });
        } else {
            res.json({ ok: false });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ ok: false });
    }
});


app.get("/login", async (req, res) => {

    const nombre = req.query.nombre;
    const pin = req.query.pin;

    try {

        const result = await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("pin", sql.VarChar, pin)
            .query(`
                SELECT nombre
                FROM UsuariosBancoste
                WHERE nombre = @nombre AND password = @pin
            `);

        if (result.recordset.length > 0) {

            res.json({
                ok: true,
                usuario: result.recordset[0]
            });

        } else {

            res.json({ ok: false });

        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ ok: false });
    }

});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
}); 