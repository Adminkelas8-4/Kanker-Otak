const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST pesan konsultasi
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, msg: "Pesan berhasil disimpan!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET semua pesan
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
