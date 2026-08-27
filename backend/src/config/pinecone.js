const {Pinecone} = require("@pinecone-database/pinecone")
require("dotenv").config();

//pinecone client initialization
const pc = new Pinecone({
    apiKey:process.env.PINECONE_API_KEY,
});