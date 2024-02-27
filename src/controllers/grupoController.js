import { pool } from "../db.js"; // Asegúrate de que esta ruta sea correcta


export const renderGrupos = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM grupos");
    res.render("grupos", { grupos: rows });
  };

// Crear un grupo
export const createGrupo = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const result = await pool.query("INSERT INTO grupos (nombre, descripcion) VALUES (?, ?)", [nombre, descripcion]);
    res.status(201).json({ message: "Grupo creado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el grupo", error });
  }
};

// Leer todos los grupos
export const getGrupos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM grupos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los grupos", error });
  }
};

// Actualizar un grupo
export const updateGrupo = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    await pool.query("UPDATE grupos SET nombre = ?, descripcion = ? WHERE id = ?", [nombre, descripcion, id]);
    res.json({ message: "Grupo actualizado" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el grupo", error });
  }
};

// Eliminar un grupo
export const deleteGrupo = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM grupos WHERE id = ?", [id]);
    res.json({ message: "Grupo eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el grupo", error });
  }
};