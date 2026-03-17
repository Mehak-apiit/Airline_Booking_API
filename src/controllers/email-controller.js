import {EmailService} from '../services/index.js';
async function create(req,res){
    try{
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail
        });
        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
            data: response
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Email sending failed",
            error: error.message
        });
    }
}
export default create;