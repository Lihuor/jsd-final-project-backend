const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// Configure CORS to allow requests from specified origins
const allowedOrigins = ['http://localhost:3000', 'https://mern-budget-management-final-project.onrender.com'];

// Check if the environment is production, and then allow the deployed frontend URL
if (process.env.NODE_ENV === 'production') {
    allowedOrigins.push('https://mern-budget-management.onrender.com'); 
}

app.use(cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Handle preflight requests
app.options('*', cors());


// routes
readdirSync('./routes').map((r) => app.use('/api/v1', require(`./routes/${r}`)));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

const server = () => {
    db();
    // console.log(`Server running on port ${PORT}`);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

server();