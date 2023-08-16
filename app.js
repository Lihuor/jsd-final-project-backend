const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;



// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://mern-budget-management-final-project.onrender.com'], 
}));

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