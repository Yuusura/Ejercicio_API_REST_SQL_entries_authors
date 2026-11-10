import { query, body, validationResult } from "express-validator";

export const validateGetAllEntries = [
  query("email")
    .optional({ checkFalsy: true })
    .isEmail()
    .withMessage("Provide a valid email: name@thebridgeschool.es"),

  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateEditEntries = [
    body("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string"),

  body("content")
    .exists({ checkFalsy: true })
    .withMessage("Content is required")
    .bail()
    .isString()
    .withMessage("Content must be a string"),

  body("date")
    .exists({ checkFalsy: true })
    .withMessage("Date is required")
    .bail()
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("Date must have the format YYYY-MM-DD")
    .bail()
    .isISO8601({ strict: true, strictSeparator: true })
    .withMessage("Date must be valid"),

  body("id_author")
    .exists({ checkFalsy: true })
    .withMessage("Author ID is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Author ID must be a positive integer"),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email must be valid"),

  body("oldTitle")
    .exists({ checkFalsy: true })
    .withMessage("Previous title is required")
    .bail()
    .isString()
    .withMessage("Previous title must be a string"),
  
  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateDeleteEntries = [
  query("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string"),

  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateGetAllAuthors = [
  query("email")
    .optional({ checkFalsy: true })
    .isEmail()
    .withMessage("Provide a valid email: name@thebridgeschool.es"),

  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateEditAuthors = [
    body("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string"),

  body("content")
    .exists({ checkFalsy: true })
    .withMessage("Content is required")
    .bail()
    .isString()
    .withMessage("Content must be a string"),

  body("date")
    .exists({ checkFalsy: true })
    .withMessage("Date is required")
    .bail()
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("Date must have the format YYYY-MM-DD")
    .bail()
    .isISO8601({ strict: true, strictSeparator: true })
    .withMessage("Date must be valid"),

  body("id_author")
    .exists({ checkFalsy: true })
    .withMessage("Author ID is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Author ID must be a positive integer"),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email must be valid"),

  body("oldTitle")
    .exists({ checkFalsy: true })
    .withMessage("Previous title is required")
    .bail()
    .isString()
    .withMessage("Previous title must be a string"),
  
  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateDeleteAuthors = [
  query("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .bail()
    .isString()
    .withMessage("Email must be a string"),

  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

export const validateCreateAuthors = [
      body("name")
    .exists({ checkFalsy: true })
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage("Name must be a string"),

  body("surname")
    .exists({ checkFalsy: true })
    .withMessage("Surname is required")
    .bail()
    .isString()
    .withMessage("Surname must be a string"),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email must be valid"),

  body("image")
    .optional({ checkFalsy: true })
    .isString()
    .withMessage("Image must be a string"),
  
  (req, res, next) => { //devulve status 400 si aun queda algún error pendiente de resolver
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];