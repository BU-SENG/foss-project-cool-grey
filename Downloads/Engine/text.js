const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Portify Engine is running!");
});

// Serve JSON data from data/formData.json
app.get('/forms', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'formData.json'); // updated path
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to load data" });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(8080, () => {
  console.log("Portify Engine running on http://localhost:8080");
});