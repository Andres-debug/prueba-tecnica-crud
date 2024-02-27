import { pool } from "../db.js"; 

export const renderGrupos = async (req, res) => {
    try {
      const [gruposRows] = await pool.query("SELECT * FROM grupos");
      res.render("grupos", { grupos: gruposRows });
    } catch (error) {
      res.status(500).json({ message: "Error al renderizar los grupos", error });
    }
};

export const createGrupos = async (req, res) => {
  const newGroup = req.body;
    await pool.query("INSERT INTO grupos set ?", [newGroup]);
};

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