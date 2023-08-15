const { default: mongoose } = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 50,
    },
    type: {
        type: String,
        default: "INCOME"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
},{timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);
