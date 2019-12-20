const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const graphQlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolver/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend/my-app/build')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(isAuth);


app.use('/graphql', graphQlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers, 
    graphiql: true
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/my-app/build', 'index.html'));
});

//TODO: Change mongo URL later. 
console.log(`Connecting to DB: ${process.env.MONGO_DB}`);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
        .then(() => {
            const port = process.env.PORT || 8080;
            console.log(`Connected to the database. Serving at port ${port}...`);
            app.listen(port);
        })
        .catch(err => {
            console.log(err);
        });