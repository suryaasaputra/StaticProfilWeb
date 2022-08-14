const express = require('express');
const app = express();
const path = require('path');
const appRouting = require('./routers/app-route');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', appRouting);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})