const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/db');
const initModels = require('./models/init-models');

require('dotenv').config(); // require .env

//middleware
app.use(express.json());
app.use(cors());



// Routes
const userRoutes = require('./routes/Users');

app.use('/api/users', userRoutes);

// 404 route
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

