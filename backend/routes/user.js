const express = require("express");
const router = express.Router();
const { authorize, isAdmin } = require("../middlewares");
const { userController } = require("../controllers");
const { errorCatcher } = require("../errors");

require("dotenv").config();

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *              properties:
 *                  name:
 *                      type: string
 *                      description: Name of user
 *                  email:
 *                      type: string
 *                      description: Email for the user
 *                  password:
 *                      type: string
 *                      description: password for the user
 *                  employeementstatus:
 *                      type: string
 *                      discription: employeement status active or non active
 *              example:
 *                  name: Malik Hammad Hameed
 *                  email: hammadhameed956@gmail.com
 *                  password: mypassword
 *                  employeementstatus: active
 * 
 *      securitySchemes: 
 *          bearerAuth:
 *              type: http
 *              scheme: bearer
 *              bearerFormat: JWT 
 *      responses:
 *          UnauthorizedError:
 *              description: Acess token is missing or Invalid
 * 
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User Routes
 */

/**
 * @swagger
 * /api/user/createuser/:
 *      post:
 *          summary: Create User
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      example:
 *                          name: Malik Hammad
 *                          email: hammadhameed956@gmail.com
 *                          password: mypassword
 *          responses:
 *              401: 
 *                  $ref: '#/components/responses/UnauthorizedError'
 *              400:
 *                  description: Validation Error
 *              200:
 *                  description: User Inserted
 *              500:
 *                  description: Server Not Responding
 *          security:
 *              - bearerAuth: []
 * */

router.post("/createuser",[authorize,isAdmin], errorCatcher(userController.createUser));

/**
 * @swagger
 * /api/user/login/:
 *      post:
 *          summary: Login User
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      example:
 *                          email: hammadhameed956@gmail.com
 *                          password: mypassword
 *          responses:
 *              400:
 *                  description: Validation Error
 *              200:
 *                  description: User Logged In
 *              500:
 *                  description: Server Not Responding
 * */
router.post("/login", errorCatcher(userController.login));


// Update Password
router.post("/update-password",[authorize],errorCatcher(userController.updatePassword));

// Forgot Password
router.post("/forgot-password",errorCatcher(userController.forgotPassword));

//Rest Password
router.get("/reset-password",errorCatcher(userController.resetPassword));



module.exports = router;
