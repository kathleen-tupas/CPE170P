import { MongoClient } from "mongodb";
import { readFileSync } from 'fs';

const uri = 'mongodb://localhost:27017/';

async function insertRecipeFromJSONFile(path) {

    let client = new MongoClient(uri);

    let rawdata = readFileSync(path);
    let obj = JSON.parse(rawdata);

    await client.connect();

    await client
        .db('recipeApp')
        .collection('Recipes')
        .insertOne(obj);
    await client.close();
}



let adobo_path = '../sample_schemas/recipe.json'
insertRecipeFromJSONFile(adobo_path)