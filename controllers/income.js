const IncomeSchema = require('../models/IncomeModel');
const { param } = require('../routes/transactions');


exports.addIncome = async (req, res) => {
    // console.log(req.body);
    const { title, amount, date, category, description } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
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
        await income.save();
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }

    console.log(income);
}

exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        await IncomeSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Income deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
}