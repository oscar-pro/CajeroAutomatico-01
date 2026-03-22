const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const config = {
    user: "sa",
    password: "Oscar",
    server: "localhost\\SQLEXPRESS01",
    database: "UsuariosDb",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

app.get("/login", async (req, res) => {

    const pin = req.query.pin;

    try {

        await sql.connect(config);

        const result = await sql.query`
            SELECT password FROM UsuariosBancoste WHERE password = ${pin}
        `;

        if (result.recordset.length > 0) {
            res.json({ ok: true });
        } else {
            res.json({ ok: false });
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Error del servidor");
    }

});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});