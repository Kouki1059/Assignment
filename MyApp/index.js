const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myapp";

async function main() {
    try {
        await client.connect();
        console.log("[DEBUG]: MongoDB connected");
        const db = client.db(dbName);
        const collection = db.collection('users');

        app.get('/', async (req, res) => {
            const { searchType, keyword } = req.query;
            let users = [];
            let query = {};

            if (keyword && keyword.trim() !== "") {
                if (searchType === "name") {
                    query.$or = [
                        { lastName: { $regex: keyword, $options: 'i' } },
                        { firstName: { $regex: keyword, $options: 'i' } }
                    ];
                } else if (searchType === "gender") {
                    query.gender = keyword;
                } else if (searchType === "age") {
                    query.age = Number(keyword);
                } else if (searchType === "address") {
                    query.address = { $regex: keyword, $options: 'i' };
                }
                users = await collection.find(query).toArray();
            }

            res.render('index', { 
                users, 
                searchType: searchType || "name", 
                keyword: keyword || "" 
            });
        });

        app.post('/register', async (req, res) => {
            const { lastName, firstName, lastfurigana, firstfurigana, gender, age, email, address, phone } = req.body;
            try {
                await collection.insertOne({
                    lastName, firstName, lastfurigana, firstfurigana,
                    gender, age: Number(age), email, address, phone,
                    createdAt: new Date()
                });
                res.redirect('/'); 
            } catch (err) {
                console.error(err);
                res.status(500).send("エラーが発生しました");
            }
        });

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

main().catch(console.error);