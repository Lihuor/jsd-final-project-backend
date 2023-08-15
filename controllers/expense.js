const ExpenseSchema = require('../models/ExpenseModel');
const { param } = require('../routes/transactions');


exports.addExpense = async (req, res) => {
    // console.log(req.body);
    const { title, amount, type, date, category, description } = req.body;

    const expense = new ExpenseSchema({
        title,
        amount,
        type,
        date,
        category,
        description
    })

    try {
        // validation
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ msg: 'Please fill all fields' });
        }
        if (amount <= 0 || amount === 'number') {
            return res.status(400).json({ msg: 'Amount must be greater than 0' });
        }
        await expense.save();
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }

    console.log(expense);
}

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        await ExpenseSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Expense deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
}