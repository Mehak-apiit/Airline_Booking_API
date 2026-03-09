import { StatusCodes } from 'http-status-codes';
import {Op} from 'sequelize';
import FlightRepository from '../repositories/flight-repository.js';
import FlightRespository from '../repositories/flight-repository.js';
const flightRepository = new FlightRespository;
class FlightService {
    async createFlightService(data) {
        try {
            const flight = await flightRepository.create(data);
            return flight;
        } catch (error) {
            throw error;
        //     {
        //     if(error.name == 'SequelizeValidationError'){
        //         let explanation = [];
        //         error.errors.forEach((err) => {
        //             explanation.push(err.message);
        //         });
        //         return res.Status(StatusCodes.BAD_REQUEST).json({message: 'Validation error'});
        //     }
        //     return res.Status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Can not create flight'});
        // }
        }

    };
     async getAllFlights(query){
         
         let customFilter = {};
         let sortFilter = [];
         const endingTripDate = "23:59:00";
         
         if(query.trips) {
             [departureAirportId,arrivalAirportId] = query.trips.split("-");
             customFilter.departureAirportId = departureAirportId;
            customFilter.arrivalAirportId = arrivalAirportId;
       }
       if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        console.log(minPrice,maxPrice);
        customFilter.price = {
            [Op.between]: [minPrice,((maxPrice == undefined)? 20000: maxPrice)]
        }
       }
       if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
       }
       if(query.tripDate){
        customFilter.departureTime = {
            [Op.between]: [query.tripDate,query.tripDate + endingTripDate]
        }
       }
       if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters
       }
       console.log(customFilter,sortFilter)
       try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
       }catch(error){
        console.log(error);
        throw error;
       }


     };
    }

    



export default FlightService;
