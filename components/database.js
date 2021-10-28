import { MongoClient } from "mongodb";
import { readFileSync, readdir } from 'fs';

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

async function populate() {
    let json_path = '../json/'
    readdir(json_path, (err, files) => {
        files.forEach(file => {
            insertRecipeFromJSONFile(json_path + file)
        })
    })
    //insertRecipeFromJSONFile(adobo_path)

}

async function getRecipesByName(name) {
    let client = new MongoClient(uri);

    await client.connect();

    let cur = client
                .db('recipeApp')
                .collection('Recipes')
                .find({'title': {$regex : name}});
    await client.close();

    return cur
}

async function getAllRecipes() {
    let client = new MongoClient(uri);

    await client.connect();

    let recipes = await client
                .db('recipeApp')
                .collection('Recipes')
                .find({})
                .toArray();
    await client.close();

    return recipes
}

await populate()