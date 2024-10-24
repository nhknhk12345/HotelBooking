const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Booking API');
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
