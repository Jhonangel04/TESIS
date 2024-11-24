import { pool } from "../db.js";

const register = async (req, res) => {
  try {
    const client = await pool.connect();

    //tomando ID de Role-> default (usuario)
    const getDefaultRoleID = await client.query('SELECT id FROM public."classification" WHERE classification_type = \'usuario\'');
    client.release();
    const RoleID = getDefaultRoleID.rows[0].id; 


    const {Nombre, apellido, identificación, correo_electrónico, contraseña, fecha_de_nacimiento} = req.body;

    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
 
export { register };
