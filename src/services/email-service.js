import TicketRepository from '../repositories/ticket-repository.js';
import {MAILER} from '../config/serverConfig.js';
const ticketRepo = new TicketRepository();
class EmailService {
    async sendEmail(mailFrom, mailTo, subject, text) {
        try {
            const response = await MAILER.sendMail({
                from: mailFrom,
                to: mailTo,
                subject: subject,
                text: text
            })
            return response;
        } catch (error) {
            throw error;
        }

    };
     async createTicket(data) {
        try {
            const response = await ticketRepo.create(data);
            return response;
            }catch(error){
                throw error;
            }
            
        }
        async getPendingEmail(){
            try{
                const response = await ticketRepo.getPendingTickets();
                return response;
            } catch(error){
                throw error;
            }

        }

    };
    


    



export default EmailService;
