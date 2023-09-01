const express = require('express');
const port = 2507;
const app = express();
app.use(express.json());


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

const quest_rtr = require('./routers/quest_rout');
app.use('/Question',quest_rtr);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});