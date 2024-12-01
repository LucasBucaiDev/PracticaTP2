class TransactionmemModel {
    constructor() {
        this.transactions = [];
    }

    createTransaction = async (data) => {
        const newTransaction = {
            id: this.transactions.length + 1,
            ...data
        };
        this.transactions.push(newTransaction);
        return newTransaction;
    }

    getTransactions = async () => {
        return this.transactions;
    }

    getTransactionAmount = async () => {
        return this.transactions.length;
    };

    deleteTransactionById = async (id) => {
        const index = this.transactions.findIndex((transaction) => transaction.id === parseInt(id));
        if (index !== -1) {
            this.transactions.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = TransactionmemModel;