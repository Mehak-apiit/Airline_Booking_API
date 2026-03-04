import express from 'express';
import {ServerConfig} from './config/index.js';
import apiRoutes from './routes/index.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// http://localhost:3000/api
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
});