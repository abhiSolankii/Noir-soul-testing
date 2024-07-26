const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const connectDB = require('./db'); 
const app = express();
const port = process.env.PORT || 3000; 

// Path to the data file
const dataPath = path.join(__dirname, './data.json');
let users;

// Read and parse the data file
fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data file:', err);
    return;
  }
  users = JSON.parse(data).users;
});

// Connect to MongoDB
connectDB();

// Define the Transaction schema and model
const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  itemName: String,
  dateAcquisition: String,
  price: String,
  provenance: String,
  type: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Enable CORS
app.use(cors());

app.get('/profile/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/nft-history', async (req, res) => {
  try {
    const nfthistory = await Transaction.find();
    res.json(nfthistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
