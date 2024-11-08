const express = require('express')
const app = express();
const cors = require('cors');


require('dotenv').config();
require('./config/mongoose.config')

const PORT = process.env.port

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

const AllMyProductsRoutes = require('./routes/product.routes');
AllMyProductsRoutes(app);

app.listen(PORT, () => console.log('listening on port: ${PORT}'));