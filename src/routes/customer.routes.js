import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
} from "../controllers/customerController.js";
import {
    createGrupos,
    deleteGrupo,
    renderGrupos,
    updateGrupo,
  } from "../controllers/grupoController.js";

  import {
    createProducto,
    deleteProducto,
    renderProductos,
    updateProducto
  } from "../controllers/productoController.js"
  
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/update/:id", editCustomer);
router.post("/update/:id", updateCustomer);
router.get("/delete/:id", deleteCustomer);
router.post("/grupos/add", createGrupos);
router.post("/grupos/update/:id", updateGrupo);
router.get("/grupos/delete/:id", deleteGrupo);
router.get("/grupos",renderGrupos);
router.post("/productos/add", createProducto);
router.post("/productos/update/:id", updateProducto);
router.get("/productos/delete/:id", deleteProducto);
router.get("/productos",renderProductos);



export default router;