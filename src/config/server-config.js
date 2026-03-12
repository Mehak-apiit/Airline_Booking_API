import dotenv from 'dotenv';
dotenv.config();
export const ServerConfig = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    JWT_SECRET: process.env.JWT_SECRET

}