/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of user
 *         full_name:
 *           type: string
 *           description: The full name of the user
 *         date_of_birth:
 *           type: date
 *           description: DOB of user
 *         position:
 *           type: string
 *           description: Position of user in the company
 *         company: 
 *           type: string
 *           description: Name of the company that the user works for
 *         gender: 
 *           type: string
 *           description: Gender of user
 *         phonenumber: 
 *           type: string
 *           description: Phone number of user
 *         password:
 *           type: string
 *           description: The user's password
 *         role:
 *           type: string
 *           enum:
 *             - user
 *             - admin
 *           default: user
 *          
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /getAllDemo:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * /getByID/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Error fetching user ID
 * /getFullNameByID/{id}:
 *   get:
 *     summary: Get the full name of the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The full name of the user by id
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   description: The status of the response
 *                 Account:
 *                   type: object
 *                   properties:
 *                     full_name:
 *                       type: string
 *                       description: The full name of the user
 *       500:
 *         description: Error fetching user ID
 */


const express = require("express")
const userRouter = express.Router();
const models = require('../models/users');
const userController = require('../controller/userController')
// Create a new user
userRouter.post('/create', (req, res) => {
    const { name, password, role } = req.body;
    models.User.create({
        name,
        password, // You should handle password encryption here
        role,
    })
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

// List all users
userRouter.get('/user', (req, res) => {
    models.User.findAll()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

// Get user by ID
userRouter.get('/user/:id', (req, res) => {
    const { id } = req.params;
    models.User.findByPk(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

// Update user by ID
userRouter.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, password, role } = req.body;
    models.User.update(
        {
            name,
            password, // You should handle password encryption here
            role,
        },
        {
            where: {
                id,
            },
        }
    )
        .then(() => {
            res.status(204).send('User updated');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
});

// Delete user by ID
userRouter.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    models.User.destroy({
        where: {
            id,
        },
    })
        .then(() => {
            res.status(204).send('User deleted');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
});


//demo 1 
userRouter.get("/getAllDemo" , userController.getAllDemo);
userRouter.get("/getByID/:id" , userController.getByID);
userRouter.get("/getFullNameByID/:id" , userController.getFullNameByID);
userRouter.get("/getUserByID/:id" , userController.getUserByID);
userRouter.put("/updateUserID/:id" , userController.updateUserID);




module.exports = userRouter;
