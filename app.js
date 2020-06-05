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

if(process.env.RUN_ENV === 'DEV') {
    app.use(express.static(path.join(__dirname, 'client/build')));
} else if(process.env.RUN_ENV === 'PROD') {
    app.use(express.static(path.join(__dirname, 'client/build')));
} else {
    console.error("Run environment not specified");
}

// // TODO: Check if it works - It doesnt work. 
// app.use((req, res, next) => {
//     if(process.env.RUN_ENV !== "DEV") {
//         if(!req.secure){
//             res.redirect("https://" + req.headers.host + req.url);
//         }
//     } else {
//         next();
//     }
// });

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

let graphqlConfigObj = {
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
};

if(process.env.RUN_ENV !== 'PROD') {
    graphqlConfigObj['graphiql'] = true;
} else {
    graphqlConfigObj['graphiql'] = false;
}

app.use('/graphql', graphQlHttp(graphqlConfigObj));

app.get('*', function(req, res) {
    if(process.env.RUN_ENV === 'DEV') {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    } else if(process.env.RUN_ENV === 'PROD') {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    } else {
        console.error("Run environment not specified");
    }
});

//TODO: Change mongo URL later. 
console.log(`Connecting to DB: ${process.env.MONGO_DB}`);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
                { 
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
                .then(() => {
                    const port = process.env.PORT || 8080;
                    console.log(`Connected to the database. Serving at port ${port}...`);
                    app.listen(port);
                    // setupGoogleReviewIntegration();
                })
                .catch(err => {
                    console.log(`DB Connection Error: ${err.message}`);
                });



function setupGoogleReviewIntegration() {
    console.log("jere");
}