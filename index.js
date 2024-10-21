const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname)));


// MongoDB connection
mongoose.connect('mongodb+srv://admin:12345@storagedistribution.hjtwm.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Define a simple schema for accounts
const AccountSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true },
    storageBought: { type: Number, required: true },
    totalSpent: { type: Number, required: true }
});


const Account = mongoose.model('Account', AccountSchema);

// Endpoint to save account data
app.post('/saveAccount', async (req, res) => {
    const { walletAddress, storageBought, totalSpent } = req.body;
    try {
        const account = new Account({ walletAddress, storageBought, totalSpent });
        await account.save();
        res.json({ message: 'Account saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving account', error });
    }
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});