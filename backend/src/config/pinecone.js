const {Pinecone} = require("@pinecone-database/pinecone")
require("dotenv").config();

//pinecone client initialization
const pc = new Pinecone({
    apiKey:process.env.PINECONE_API_KEY,
});

const indexName = process.env.PINECONE_INDEX_NAME;
const pineconeIndex = pc.index(indexName);

console.log(`[Pinecone] configured for index : ${indexName}`);

module.exports = {pc, pineconeIndex, indexName};
