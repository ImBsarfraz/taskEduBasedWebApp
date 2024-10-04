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

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Database Connected'))
    .catch(err=> console.log(err));
    
app.use('/api/contact', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


