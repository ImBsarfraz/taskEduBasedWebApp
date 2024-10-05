const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const contactRoutes = require('./routes/contact.js');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB

const dbUri = process.env.MONGODB_CLOUD_URI || process.env.MONGODB_LOCAL_URI;

mongoose.connect(dbUri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database Connected');
});
    
app.use('/api/contact', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


