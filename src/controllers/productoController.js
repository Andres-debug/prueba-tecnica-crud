import { pool } from "../db.js"; 

export const renderProductos = async (req, res) => {
  try {
    const [productosRows] = await pool.query("SELECT * FROM productos");
    res.render("productos", { productos: productosRows });
  } catch (error) {
    res.status(500).json({ message: "Error al renderizar los productos", error });
  }
};

export const createProducto = async (req, res) => {
  const newProduct = req.body;
    await pool.query("INSERT INTO productos set ?", [newProduct]);
};


export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};


export const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio } = req.body;
  try {
    await pool.query("UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?", [nombre, descripcion, precio, id]);
    res.json({ message: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};


export const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM productos WHERE id = ?", [id]);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};