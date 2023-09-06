const express = require('express');
const port = 2507;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

const quest_rtr = require('./routers/quest_rout');
const front_rtr = require('./routers/fe_Checks_R');
app.use('/Question', quest_rtr);
app.use('/Front', front_rtr);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});