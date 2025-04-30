import { Token } from "../models/tokenModel.js";
import { User } from "../models/userModel.js";

// Generate a single token
export const generateToken = async (req, res, next) => {
    try {
      const { email, createdBy } = req.body;
  
      // Ensure the HR/Admin (createdBy) exists
      const creator = await User.findById(createdBy);
      if (!creator) {
        return res.status(404).json({ success: false, message: "Creator not found" });
      }
  
      // Generate a unique 5-digit numeric token
      const tokenValue = Math.floor(10000 + Math.random() * 90000); // 5-digit token: 10000 to 99999
  
      const newToken = new Token({
        token: tokenValue,
        email,
        createdBy,
      });
  
      await newToken.save();
      return res.status(201).json({ success: true, message: "Token generated successfully", data: newToken });
    } catch (error) {
      next(error);
    }
  };
  
// Generate multiple tokens
export const generateMultipleTokens = async (req, res, next) => {
  try {
    const { count, createdBy } = req.body;

    // Ensure the HR/Admin (createdBy) exists
    const creator = await User.findById(createdBy);
    if (!creator) {
      return res.status(404).json({ success: false, message: "Creator not found" });
    }

    const tokens = [];
    for (let i = 0; i < count; i++) {
      const tokenValue = Math.floor(100000 + Math.random() * 900000); // 6-digit numeric token

      const newToken = new Token({
        token: tokenValue,
        createdBy,
      });

      tokens.push(newToken);
    }

    await Token.insertMany(tokens);
    return res.status(201).json({ success: true, message: "Tokens generated successfully", data: tokens });
  } catch (error) {
    next(error);
  }
};

// Fetch all tokens
export const getAllTokens = async (req, res, next) => {
  try {
    const tokens = await Token.find().populate("createdBy", "name email");
    return res.status(200).json({ success: true, message: "Tokens retrieved successfully", data: tokens });
  } catch (error) {
    next(error);
  }
};

// Fetch a single token by ID
export const getTokenById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const token = await Token.findById(id).populate("createdBy", "name email");
    if (!token) {
      return res.status(404).json({ success: false, message: "Token not found" });
    }

    return res.status(200).json({ success: true, message: "Token retrieved successfully", data: token });
  } catch (error) {
    next(error);
  }
};

// Mark a token as used
export const markTokenAsUsed = async (req, res, next) => {
  try {
    const { token } = req.body;

    const existingToken = await Token.findOne({ token });
    if (!existingToken) {
      return res.status(404).json({ success: false, message: "Token not found" });
    }

    if (existingToken.isUsed) {
      return res.status(400).json({ success: false, message: "Token already used" });
    }

    existingToken.isUsed = true;
    await existingToken.save();

    return res.status(200).json({ success: true, message: "Token marked as used", data: existingToken });
  } catch (error) {
    next(error);
  }
};

// Delete a token by ID
export const deleteToken = async (req, res, next) => {
  try {
    const { id } = req.params;

    const token = await Token.findByIdAndDelete(id);
    if (!token) {
      return res.status(404).json({ success: false, message: "Token not found" });
    }

    return res.status(200).json({ success: true, message: "Token deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Send a token via email
export const sendTokenByEmail = async (req, res, next) => {
  try {
    const { email, token } = req.body;

    // Simulate sending email
    console.log(`Sending token ${token} to ${email}`);

    return res.status(200).json({ success: true, message: "Token sent via email" });
  } catch (error) {
    next(error);
  }
};




