const userModel = require("../models/userModel");

const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get donar records",
      totalCount: donarData.length,
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get donar list API",
      error,
    });
  }
};

const getHospitalsListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get hospital records",
      totalCount: hospitalData.length,
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get hospital list API",
      error,
    });
  }
};

const getOrganizationsListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organization" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get org records",
      totalCount: orgData.length,
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get org list API",
      error,
    });
  }
};

const deleteRecordController = async (req,res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({
      success: true,
      message: "Record deleted",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "error in delete Record API",
      error,
    });
  }
};

module.exports = {
  getDonarsListController,
  getHospitalsListController,
  getOrganizationsListController,
  deleteRecordController,
};
