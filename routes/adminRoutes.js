const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalsListController,
  getOrganizationsListController,
  deleteRecordController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalsListController
);

router.get(
  "/organization-list",
  authMiddleware,
  adminMiddleware,
  getOrganizationsListController
);

router.delete(
  "/delete-record/:id",
  authMiddleware,
  adminMiddleware,
  deleteRecordController
);

module.exports = router;
