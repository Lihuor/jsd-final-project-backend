const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// Add income route
router
.post('/addIncome', addIncome)
.get('/getIncome', getIncome)
.delete('/deleteIncome/:id', deleteIncome)
.post('/addExpense', addExpense)
.get('/getExpense', getExpense)
.delete('/deleteExpense/:id', deleteExpense)


module.exports = router