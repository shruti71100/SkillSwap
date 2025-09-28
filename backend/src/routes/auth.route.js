import express from "express"
import {login,signup,logout} from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)
router.post("/logout", logout)

/*GET = retrieve data (read-only).
POST = send data (create or update something).*/

export default router

