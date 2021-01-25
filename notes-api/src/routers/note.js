const express = require("express");
const Note = require("../models/note");
const router = new express.Router();

router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).send(notes);
  } catch(error) {
    res.status(500).send(error);
  }
})

module.exports = router;
