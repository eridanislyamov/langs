var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data 
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect();
        var database = client.db("langs");
        database.dropDatabase()
        database = client.db("langs");
        const langs = database.collection("langs");
        const result = await langs.insertMany(data); 
        console.log(`${result} documents were inserted`);
    } 
    finally {
           await client.close();
    } 
}

run()