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
        .updateOne({'title': obj.title},
                   { $set: obj },
                   {upsert: true});
    await client.close();
}

async function getRecipesByName(name) {
    let client = new MongoClient(uri);

    let rawdata = readFileSync(path);
    let obj = JSON.parse(rawdata);

    await client.connect();

    let cur = client
                .db('recipeApp')
                .collection('Recipes')
                .find({'title': {$regex : name}});
    await client.close();

    return cur
}


let adobo_path = '../sample_schemas/recipe.json'
insertRecipeFromJSONFile(adobo_path)