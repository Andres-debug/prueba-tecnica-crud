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
    editGrupo,
    renderGrupos,
    updateGrupo,
  } from "../controllers/grupoController.js";
  
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/update/:id", editCustomer);
router.post("/update/:id", updateCustomer);
router.get("/delete/:id", deleteCustomer);
router.get("/", renderGrupos);
router.post("/grupos/add", createGrupos);
router.get("/grupos/update/:id", editGrupo);
router.post("/grupos/update/:id", updateGrupo);
router.get("/grupos/delete/:id", deleteGrupo);

export default router;