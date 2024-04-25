const express = require('express');
const router = express.Router();
const Mehtods = require("./mehtods")
const connect = require("../connection/connect")


if(!connect)throw console.error(connect);

router.post('/register', (req, res) => {
  console.log("11111111111111111");

  if (req.body.firstname !== "" || req.body.lastname !== "" || req.body.address !== "" || req.body.phone !== "") {
    const { firstname, lastname, address, phone } = req.body;
    const sql = "INSERT INTO `book_now`(`firstname`, `lastname`, `address`, `phone`) VALUES (?,?,?,?)";
    connect.query(sql, [firstname, lastname, address, phone], (error, result) => {
      if (!error) {
        res.send({ success: true });
      } else {
        console.error("Error executing SQL query:", error);
        res.send({ success: false });
      }
    });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
