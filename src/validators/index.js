import { body } from "express-validator";

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

export { userRegisterValidator, userLoginValidator };
