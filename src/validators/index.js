import { body } from "express-validator";
import { AvailableUserRoles } from "../utils/constant.js";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLowercase()
      .withMessage("Username must in lowercase")
      .isLength({ min: 3 })
      .withMessage("username must be atleast 3 characters long"),
    body("password").trim().notEmpty().withMessage("Password is required"),
    body("fullName").optional().trim(),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .if((value, { req }) => !req.body.username)
      .notEmpty()
      .withMessage("Email or username is required")
      .if((value) => value)
      .isEmail()
      .withMessage("Email is invalid!"),
    body("username")
      .if((value, { req }) => !req.body.email)
      .notEmpty()
      .withMessage("Email or username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
};

const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword").notEmpty().withMessage("Old Password is required"),
    body("newPassword").notEmpty().withMessage("New Passowrd is Required"),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty("")
      .withMessage("Email is required")
      .isEmail("")
      .withMessage("Email is invalid"),
  ];
};

const userResetForgotPasswordValidator = () => {
  return [body("newPassword").notEmpty().withMessage("Password is required!")];
};

const createProjectValidator = () => {
  return [
    body("name").notEmpty().withMessage("Name is required!"),
    body("description").optional(),
  ];
};

const addMemberToProjectValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required ")
      .isEmail()
      .withMessage("Email is invalid"),
    body("role")
      .notEmpty()
      .withMessage("Role is required!")
      .isIn(AvailableUserRoles)
      .withMessage("Role is Invalid"),
  ];
};

export {
  userRegisterValidator,
  userLoginValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  createProjectValidator,
  addMemberToProjectValidator,
};
