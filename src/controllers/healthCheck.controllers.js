import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/aync-handler.js"
/*
const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running . . ." }));
  } catch (error) {}
};
*/
const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "server is still running bitch 🙈" }));
});
export default healthCheck;
