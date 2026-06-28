import { Router } from "express";
import announcementController from "../controller/announcementController.js";

const router = Router();

router.route("/text").post(announcementController);

export default router;
