import { MongoClient } from "mongodb";
import { readFileSync } from 'fs';

let uri = 'mongodb://localhost:27017/';

let client = new MongoClient(uri);

let rawdata = readFileSync('../sample_schemas/recipe.json');
let adobo = JSON.parse(rawdata);

await client.connect();

await client
    .db('recipeApp')
    .collection('Recipes')
    .insertOne(adobo);
await client.close();