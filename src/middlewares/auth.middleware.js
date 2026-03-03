import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/async-handler.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // payload includes `_id` directly; earlier code attempted to access
    // `decodedToken.findById?._id`, which is always undefined. That resulted in
    // `User.findById(undefined)` returning null and an erroneous 401 response.
    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );
    if (!user) {
      throw new ApiError(401, "invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "invalid access token");
  }
});
