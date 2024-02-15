const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});