const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoose.config');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/author.routes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
