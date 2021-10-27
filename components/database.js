import { MongoClient } from "mongodb";

let uri = 'mongodb://localhost:27017/';

let client = new MongoClient(uri);

const adobo = {
    "title": "Adobo",
    "ingredients": [
        {"amt": "2", "unit": "lbs", "name": "pork belly"},
        {"amt": "2", "unit": "tbsp", "name": "garlic minced"},
        {"amt": "5", "unit": "pcs", "name": "dried bay leaves"},
        {"amt": "4", "unit": "tbps", "name": "vinegar"},
        {"amt": "1", "unit": "cup", "name": "soy sauce"},
        {"amt": "1", "unit": "tablespoon", "name": "peppercorn"},
        {"amt": "2", "unit": "cups", "name": "water"},
        {"amt": "", "unit": "", "name": "Salt"}
    ],
    "steps": [
        {"index": "1", "img": "placeholder.jpg", "text": "Do this"},
        {"index": "2", "img": "placeholder.jpg", "text": "Do this next"},
        {"index": "3", "img": "placeholder.jpg", "text": "Step 3"},
        {"index": "4", "img": "placeholder.jpg", "text": "Serve"}
    ]
};

await client.connect();

await client
    .db('recipeApp')
    .collection('Recipes')
    .insertOne(adobo);
await client.close();