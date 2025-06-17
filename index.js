const express = require("express");
const path = require("path");
const {connectToMongoDB } = require("./connect");

const url = require("./ models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
    console.log("Mongodb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async(requestAnimationFrame, res) => {
    const shortId = requestAnimationFrame.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            Spush: {
                visitHistory:{

                }
            }
        }
    )
})