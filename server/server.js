// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const filePath = path.join(__dirname, 'submissions.json');

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // Read existing submissions
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    let submissions = [];
    if (data) {
      submissions = JSON.parse(data);
    }

    // Add new submission
    submissions.push(formData);

    // Write updated submissions back to the file
    fs.writeFile(filePath, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Error writing file');
      }

      console.log('Form data saved successfully');
      res.status(200).send('Form data received and saved');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});