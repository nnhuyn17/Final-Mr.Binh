const db = require("../config/database");
const express = require("express");
const { UsersModel } = require("../models/users");

const getAllDemo = async (req, res) => {
    const sql = "SELECT * FROM account";
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({ Error: "Error fetching account" });
      }
      return res.status(200).json({ Status: "Success", accounts: result });
    });
  };

  const getByID = async (req, res) => {
    const id = req.params.id; // Assuming imageID is in the URL parameters
    const sql = "SELECT * FROM account where id = ?";
    const values = [id];
    db.query(sql, values, (err, result) => {
        if (err) {
        return res
            .status(500)
            .json({ Error: "Error fetching images by image ID" });
        }
        return res.status(200).json({ Status: "Success", Account: result });
    });
  };

  module.exports = {
    getAllDemo,
    getByID
  };

