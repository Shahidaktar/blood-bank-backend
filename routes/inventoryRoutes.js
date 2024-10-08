const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
  getOrganizationController,
  getOrganizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const { getOrganizationsListController } = require("../controllers/adminController");
const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventoryController);

router.get("/get-inventory", authMiddleware, getInventoryController);

router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

router.post(
  "/get-inventory-hospitals",
  authMiddleware,
  getInventoryHospitalController
);

router.get("/get-donars", authMiddleware, getDonarsController);

router.get("/get-hospitals", authMiddleware, getHospitalsController);

router.get("/get-organizations", authMiddleware, getOrganizationController);

router.get("/get-all-organizations", authMiddleware, getOrganizationsListController);

router.get(
  "/get-organizations-for-hospital",
  authMiddleware,
  getOrganizationForHospitalController
);

module.exports = router;
