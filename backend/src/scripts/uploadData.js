const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")
const {RecursiveCharacterTextSplitter} = require("@langchain/textsplitters")
const {HuggingFaceTransformersEmbeddings} = require("@langchain/community/embeddings/huggingface_transformers")
const {PineconeStore} = require("@langchain/pinecone");
const { pineconeIndex } = require("../config/pinecone");
require("dotenv").config();

async function processAndUploadPDF(){

    console.log("Everything is ok!");
    

}

processAndUploadPDF().catch(console.error);