const TransactionService = require('../services/transactionService');

class TransactionController {
    constructor() {
        this.service = new TransactionService();
    }

    createTransaction = async (req, res) => {
        try {
            const transaction = await this.service.createTransaction(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    getTransactions = async (req, res) => {
        const transactions = await this.service.getTransactions();
        res.json(transactions);
    }

    getTransactionAmount = async (req, res) => {
        const amount = await this.service.getTransactionAmount();
        res.json({message: `Cantidad de transacciones: ${amount}`});
    }

    deleteTransactionById = async (req, res) => {
        const {id} = req.params;
        const transactionDeleted = await this.service.deleteTransactionById(id);
        if (transactionDeleted) {
            res.json({message: 'Transaccion eliminada con exito'});
        } else {
            res.status(404).json({error: "No se econtro la transaccion"});
        }
    }
}

module.exports = TransactionController;