const express = require('express');
const mongoose = require('mongoose');
const ExampleModel = require('./models/example');

const app = express();
const port = 3000;

// Connect to MongoDB
const connectionString = 'mongodb+srv://hanalik:b3W5nwSBZDpfCNH5@cluster0.kzhjubm.mongodb.net/';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Define routes
app.post('/create', async (req, res) => {
    try {
        const newExample = await ExampleModel.create(req.body);
        res.json(newExample);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
