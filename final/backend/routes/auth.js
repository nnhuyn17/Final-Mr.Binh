const AuthController = require('../controller/authenticationController');
const express = require("express");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/signUp", AuthController.signUp);

/** 
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user.
 *     requestBody:
 *       description: User credentials for authentication.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username for authentication.
 *                 example: john_doe
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for authentication.
 *                 example: securePassword123
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Authentication successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated user.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       401:
 *         description: Unauthorized. Invalid credentials.
 *
 * 
 * /signup:
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