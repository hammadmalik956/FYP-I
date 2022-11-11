const express = require("express");
const router = express.Router();
const {authorize,isAdmin} = require("../middlewares");
const { userController } = require("../controllers");
require("dotenv").config();

// Route 1: Create A user using : POST "/api/auth/createuser" Admin Loggedin Required
/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  -name
 *                  -email
 *                  -password
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
 *              200:
 *                  description: User Inserted
 *              500:
 *                  description: Server Not Responding
 * */

router.post("/createuser",[authorize, isAdmin],userController.createUser);


// Route 2: Authenticate a user using  : POST "/api/auth/login" Doesn't require Authentication

router.post("/login",userController.login);

// Route 3: GET all users data except admin  : POST "/api/auth/getusers" Login Admin Required

router.post("/getusers", [authorize, isAdmin], userController.getAllUsers);


module.exports = router;
