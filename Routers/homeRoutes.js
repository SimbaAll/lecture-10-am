import express from "express";
import homeController from "../Controllers/homeController.js";

const router = express.Router()

router.post("/insert",homeController.insert)
router.get("/get",homeController.get)
router.put("/update/:id",homeController.update)
router.delete("/delete/:id",homeController.delete)

export default router