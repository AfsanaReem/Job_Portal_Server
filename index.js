const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
//middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://jobPortal:jeT8EEWXbMeHMhaZ@cluster0.khy11rb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {



    }
    finally {

    }

}
run().catch(console.log);
app.get('/', (req, res) => {
    res.send('server is running')
})
app.listen(port, () => console.log(port));
