const TransactionmemModel = require('./DAOs/transactionmemModel');

class Factory {
    static get(type){
        switch(type){
            case 'MEM':
                console.log('**** Persistiendo en Memoria ****');
                return new TransactionmemModel();
            default:
                console.log('**** Persistiendo en Memoria (default) ****');
                return new TransactionmemModel();
        }
    }
}

module.exports = Factory;