const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
const cors = require('cors');


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://gil4x6uu:e3p2M!D8b46YHNF@cluster0-tudov.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let ObjectID = require('mongodb').ObjectID;

let db;

client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to DB");

    db = client.db("forum");
});



//return the stores
app.get('/getAllPosts', (req, res) => {
    getAllPosts()
        .then((result) => {
            console.log(`Send to client:${result}`)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.post('/addCommentToPost', (req, res) => {
  
    const comment = req.body;
    addCommentToPost(comment)
        .then((result) => {
            getAllPosts()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    console.log(err);
                })
        })
})

app.post('/addPostToForum', (req, res) => {
    const post = req.body;
    addPostToForum(post)
        .then((result) => {
            getAllPosts()
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    console.log(err);
                })
        })
})






async function getAllPosts() {
    const collection = client.db("forum").collection('posts');
    return collection.find({}).toArray();
}

async function addPostToForum(post) {
    const collection = client.db("forum").collection('posts');
    return collection.insertOne(post);
}

async function addCommentToPost(comment) {
    const collection = client.db("forum").collection('posts');
    return collection.findOneAndUpdate({ _id: new ObjectID(comment.post_id)  }, { $push: { comments: comment } });
}

// LISTEN ON PORT
app.listen(port, () =>
    console.log(`API RUNNING ON LOCALHOST: ${port}`)
);