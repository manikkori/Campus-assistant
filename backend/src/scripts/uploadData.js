const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")
const {RecursiveCharacterTextSplitter} = require("@langchain/textsplitters")
const {HuggingFaceTransformersEmbeddings} = require("@langchain/community/embeddings/huggingface_transformers")
const {PineconeStore} = require("@langchain/pinecone");
const { pineconeIndex } = require("../config/pinecone");
require("dotenv").config();

async function processAndUploadPDF(){

    try {
        //1. pdf  loading 
        const loader = new PDFLoader("src/data/BCA.pdf");
        const rawDocs = await loader.load();
        console.log(`PDF loaded : ${rawDocs.length} page..\n`);
        
        //2. text splitter
        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize:1000,
            chunkOverlap:200,
        });


        
    } catch (error) {
        console.log("error: ", error.message);
        
    }
    

}

processAndUploadPDF().catch(console.error);