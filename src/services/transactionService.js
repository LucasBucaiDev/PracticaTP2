const Factory = require('../models/Factory');

class TransactionService {
    constructor() {
        this.model = Factory.get("");
    }
    
    createTransaction = async (data) => {
        const newTransaction = await this.model.createTransaction(data);
        return newTransaction;
    }

    getTransactions = async () => {
        return await this.model.getTransactions();
    }

    getTransactionAmount = async () => {
        return await this.model.getTransactionAmount();
    }

    deleteTransactionById = async (id) => {
        return await this.model.deleteTransactionById(id);
    }
}

module.exports = TransactionService;