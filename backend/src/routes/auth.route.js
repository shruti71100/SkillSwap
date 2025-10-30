import express from "express";
import { login, signup, logout } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { onboard } from "../controllers/auth.controllers.js";
import axios from "axios";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

/*GET = retrieve data (read-only).
POST = send data (create or update something).*/

export default router;
