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
app.use('/Question', quest_rtr);
const front_rtr = require('./routers/fe_Checks_R');
app.use('/Front', front_rtr);
const category_rtr = require('./routers/category_R');
app.use('/categories', category_rtr );
const Answers_rtr = require('./routers/Answers_R');
app.use('/answers', Answers_rtr );
const users_rtr = require('./routers/users_rout');
app.use('/users', users_rtr );


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});