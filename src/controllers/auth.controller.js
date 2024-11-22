import { pool } from "../db.js";

const register = async (req, res) => {
  try {
    const client = await pool.connect();
    const getDefaultRoleID = await client.query('SELECT id FROM public."classification" WHERE classification_type = \'usuario\'');
    // client.release();
    // res.json(rows[0].id); Para obtener en la posición 0 del array y acceder al ID.


  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

// const {nombre, apellido, nroDocumento, correo, numero_telefono, password, fecha_nacimiento, dirección} = req.body;
export { register };
