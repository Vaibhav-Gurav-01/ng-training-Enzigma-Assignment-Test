import { Detail } from "../models/detailModel.js";
import { apiError } from "../utils/apiError.js"; 
import { apiResponse } from "../utils/apiResponse.js"; 

// controllers/detailController.js
export const createDetail = async (req, res, next) => {
  try {
    const detail = new Detail(req.body);
    await detail.save();

    return res.status(201).json(
      new apiResponse(201, "Detail created successfully", detail)
    );
  } catch (error) {
    // Ensure the error message from the backend is sent back to the client
    console.error("Error creating detail:", error);
    return next(new apiError(400, "Error creating detail", error.message));
  }
};



export const getAllDetails = async (req, res, next) => {
  try {
    const details = await Detail.find();
    return res.status(200).json(
      new apiResponse(200, "Details fetched successfully", details)
    );
  } catch (error) {
    return next(new apiError(500, "Internal server error", error.message));
  }
};

export const getDetailById = async (req, res, next) => {
  try {
    const detail = await Detail.findById(req.params.id);

    if (!detail) {
      return next(new apiError(404, "Detail not found"));
    }

    return res.status(200).json(
      new apiResponse(200, "Detail fetched successfully", detail)
    );
  } catch (error) {
    return next(new apiError(500, "Error fetching detail", error.message));
  }
};


export const deleteDetailById = async (req, res, next) => {
  try {
    const detail = await Detail.findByIdAndDelete(req.params.id);

    if (!detail) {
      return next(new apiError(404, "Detail not found"));
    }

    return res.status(200).json(
      new apiResponse(200, "Detail deleted successfully")
    );
  } catch (error) {
    return next(new apiError(500, "Error deleting detail", error.message));
  }
};
