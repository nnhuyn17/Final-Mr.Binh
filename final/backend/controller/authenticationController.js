// controllers/AuthController.js
const db = require("../config/database");
const accountsModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const validateRegisterInput = require("../validator/RegisterValidator");
require("dotenv").config();

const login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const sql = `SELECT * FROM account WHERE email = ?`;
  
    db.query(sql, [email], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          error: "Internal Server Error",
        });
      }
  
      if (result.length === 0) {
        return res.status(404).json({
          status: "failed",
          error: "Account not found",
        });
      }
  
      const account = result[0];
  
      if(password === account.password){
        const payload = {
            id: account.id,
            email: account.email,
            role: account.role,
          };
    
          jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: 3155 },
            (err, token) => {
              res.json({
                status: "success",
                token: token,
              });
            }
          );
      }
        
      });
}
// const register = async (req, res, next) => {
//   let obj = {
//     email: req.body.email,
//     password: req.body.password,
//     role: "account",
//   };

//   // Validation Register
//   const errors = validateRegisterInput(obj).errors;
//   const isValid = validateRegisterInput(obj).isValid;

//   // if invalid / doesn't pass validation
//   if (!isValid) {
//     return res.status(errors.status).json(errors);
//   }

//   // Check if the email already exists
//   const checkEmailQuery = 'SELECT * FROM account WHERE email = ?';
//   db.query(checkEmailQuery, [obj.email], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         status: "failed",
//         error: "Internal Server Error",
//       });
//     }

//     if (result.length > 0) {
//       return res.status(401).json({
//         status: "error",
//         error: Email "${obj.email}" already exists!,
//       });
//     }

//     // If email doesn't exist, insert the new account
//     const insertaccountQuery = 'INSERT INTO account SET ?';
//     db.query(insertaccountQuery, obj, (err, result) => {
//       if (err) {
//         return res.status(400).json(err);
//       }

//       res.json({
//         status: "success",
//         message: "Successfully create account!",
//         data: result,
//       });
//     });
//   });
// };


module.exports = {
  login,
//   register
};