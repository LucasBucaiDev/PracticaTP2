const express = require('express');
const TransactionController = require('../controllers/transactionController');

class TransactionRoute {
    constructor() {
        this.router = express.Router();
        this.controller = new TransactionController();
    }

    start() {
        this.router.post('/transaction', this.controller.createTransaction);
        this.router.get('/transaction', this.controller.getTransactions);
        this.router.get('/transaction/amount', this.controller.getTransactionAmount);
        this.router.delete('/transaction/:id', this.controller.deleteTransactionById);
        return this.router;
    }
}

module.exports = TransactionRoute;