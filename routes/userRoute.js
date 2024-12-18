import { clear, create, read, update } from "../controllers/usercontroller.js";
import express from "express";

const route = express.Router();

route.post("/create",create);
route.get("/read",read);
route.delete("/clear/:id",clear)
route.put("/update/:id",update)

export default route;