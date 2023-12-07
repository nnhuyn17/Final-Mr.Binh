const db = require("../config/database");

const getAllDemo = async (req, res) => {
  const sql = "SELECT * FROM meeting_requests";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ Error: "Error fetching account" });
    }
    return res.status(200).json({ Status: "Success", accounts: result });
  });
};

const createMeeting = async (req, res) => {
  // const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(req.body.date);
  // if (!isValidDate) {
  //   return res.status(400).json({ Error: "Invalid date format" });
  // }

  // Validate time_range value
  // const allowedTimeRanges = ['9am-11am', '1pm-3pm', '3pm-5pm', '5pm-7pm', '7pm-9pm'];
  // if (!allowedTimeRanges.includes(req.body.time_range)) {
  //   return res.status(400).json({ Error: "Invalid time_range value" });
  // }

  const sql =
    "INSERT INTO meeting_requests (user_id, date, time_range, content, status) VALUES (?, ?, ?, ?, ?)";
  const values = [req.body.user_id, req.body.date, req.body.time_range, req.body.content, req.body.status || 'pending'];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error posting:", err);
      return res.status(500).json({ Error: "Internal server error" });
    }

    return res.status(201).json({ Status: "Success" });
  });
}

const deleteMeetingbyID = async (req, res) => {
  const id = req.params.id; 
  const sql = "DELETE FROM meeting_requests WHERE id = ?";
  const values = [id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error deleting:", err);
      return res.status(500).json({ Error: "Internal server error" });
    }

    return res.status(200).json({ Status: "Success" });
  });
};

const getDatafromUserAndMeeting = async (req, res) => {
  const sql =
    "SELECT * FROM account INNER JOIN meeting_requests ON account.id = meeting_requests.user_id";
  
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error retrieving data:", err);
      return res.status(500).json({ Error: "Internal server error" });
    }

    return res.status(200).json({ Status: "Success", Data: result });
  });
};

const UpdateMeetingByID = async (req, res) => {
  const id = req.params.id; 
  const status = req.body.status;

  const sql = "UPDATE meeting_requests SET status = ? WHERE id = ?";
  const values = [status, id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error deleting:", err);
      return res.status(500).json({ Error: "Internal server error" });
    }

    return res.status(200).json({ Status: "Success" });
  });
};

const getByDate = async (req, res) => {
  const date = req.params.date; 
  const sql = "SELECT * FROM meeting_requests where date = ?";
  const values = [date];
  db.query(sql, values, (err, result) => {
      if (err) {
      return res
          .status(500)
          .json({ Error: "Error fetching by date" });
      }
      return res.status(200).json({ Status: "Success", Data: result });
  });
};

const getAllBookingByUserID = async (req, res) => {
  const user_id = req.params.user_id; 
  const sql = "SELECT * FROM meeting_requests where user_id = ?";
  const values = [user_id];

  db.query(sql , values ,  (err, result) => {
    if (err) {
      return res.status(500).json({ Error: "Error fetching booking req" });
    }
    return res.status(200).json({ Status: "Success", Data: result });
  });
};
module.exports = {
  getAllDemo,
  createMeeting,
  deleteMeetingbyID,
  getDatafromUserAndMeeting,
  UpdateMeetingByID,
  getByDate,
  getAllBookingByUserID,
};