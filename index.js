const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;
// Middleware---->

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wxnpgmj.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const db = client.db("green_spot_db");
    const issuesCollection = db.collection("issues");
    const myContributionCollection = db.collection("myContribution");
    const usersCollection = db.collection("users");

    app.get("/resentComplain", async (req, res) => {
      const cursor = issuesCollection.find().sort({ date: -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    //  Users Api--->>

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const email = req.body.email;
      const query = { email: email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        res.send({ message: "user already exits.do to need insert again" });
      } else {
        const result = await usersCollection.insertOne(newUser);
        res.send(result);
      }
    });

    app.get("/users", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }
      const cursor = usersCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // All Issues Api--->

    app.get("/issues", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }
      const cursor = issuesCollection.find(query).sort({ date: -1 });
      const result = await cursor.toArray();
      res.send(result);
    });

    // find one->

    app.get("/issues/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await issuesCollection.findOne(query);
      res.send(result);
    });

    app.post("/issues", async (req, res) => {
      const newProduct = req.body;
      const result = await issuesCollection.insertOne(newProduct);
      res.send(result);
    });

    // Delete->

    app.delete("/issues/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await issuesCollection.deleteOne(query);
      res.send(result);
    });

    // Patch->

    app.patch("/issues/:id", async (req, res) => {
      const id = req.params.id;
      const updateissues = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: updateissues,
      };
      const result = await issuesCollection.updateOne(query, update);
      res.send(result);
    });

    // Contribution related apis----->

    app.get("/myContribution", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }
      const cursor = myContributionCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/myContribution", async (req, res) => {
      const newContribution = req.body;
      const result = await myContributionCollection.insertOne(newContribution);
      res.send(result);
    });

    app.delete("/myContribution/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myContributionCollection.deleteOne(query);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("green spot server is running");
});

app.listen(port, () => {
  console.log(`Green Spot server is running on port:${port}`);
});
