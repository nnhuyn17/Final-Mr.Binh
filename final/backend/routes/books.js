/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         password:
 *           type: string
 *           description: The user's password
 *         role:
 *           type: string
 *           description: The role of the user (e.g., admin, user)
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user:
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
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user/{id}:
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
 *       404:
 *         description: The user was not found
 *   put:
 *     summary: Update the user by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       204:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

const userRouter = require('express').Router();
const models = require('../models');

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

module.exports = userRouter;
