// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Import routes
const productRoutes = require('./server/routes/product.routes');
productRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
