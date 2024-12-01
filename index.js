const express = require('express');
const TransactionRoute = require('./src/routes/transactionRoute');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const transactionRoute = new TransactionRoute();
app.use('/', transactionRoute.start());

app.listen(PORT, () => console.log(`Server en http://localhost:${PORT}`));

