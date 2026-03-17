import nodemailer from 'nodemailer';
import { ServerConfig} from './server-config.js';
const mailsender = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
    }
});
export default mailsender;