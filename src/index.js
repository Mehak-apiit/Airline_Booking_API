import express from 'express';
import rateLimit from 'express-rate-limit';
import { createProxyMiddleware } from 'http-proxy-middleware';
import {ServerConfig} from './config/index.js';
import apiRoutes from './routes/index.js';
import mailsender from './config/email.config.js';
const app = express();

const limiter = rateLimit({
    windowMs: 2*60*100, // 3 minutes
    max: 3,
})


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(limiter);
app.use('/flightsService',createProxyMiddleware({target:'http://localhost:3000',changeOrigin:true}))
// http://localhost:3000/api
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
});