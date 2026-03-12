import dotenv from 'dotenv';
dotenv.config();
export const ServerConfig = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE: process.env.SALT_ROUNDS
}