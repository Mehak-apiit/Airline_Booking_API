import express from 'express';
import {ServerConfig,Logger} from './config/index.js';

const app = express();
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
});