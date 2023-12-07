const AuthController = require('../controller/authenticationController');
const express = require("express");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/signUp", AuthController.signUp);

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API for user authentication
 * 
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: User login credentials
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: User's email
 *             password:
 *               type: string
 *               description: User's password
 *     responses:
 *       200:
 *         description: Successful login
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             token:
 *               type: string
 *             role:
 *               type: string
 *             id:
 *               type: integer
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * /auth/signup:
 *   post:
 *     summary: User signup
 *     tags: [Authentication]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User signup details
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       200:
 *         description: Successful signup
 *         schema:
 *           $ref: '#/definitions/SignupResponse'
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * definitions:
 *   UserSignup:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       full_name:
 *         type: string
 *       date_of_birth:
 *         type: string
 *         format: date
 *       position:
 *         type: string
 *       company:
 *         type: string
 * 
 *   SignupResponse:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *       message:
 *         type: string
 *       data:
 *         type: object
 * 
 *   Error:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *       error:
 *         type: string
 */




module.exports = router;