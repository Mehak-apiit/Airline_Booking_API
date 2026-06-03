# FlightBookingAPI

A RESTful Flight Booking backend built with **Node.js + Express**. This project exposes APIs for managing airplanes, cities, airports, flights, bookings, and authentication.

> **Base URL:** `/api/v1`

---

## Features

- **Airplane management**
- **City & Airport management**
- **Flight management** (create, list, get by id, update seats)
- **Booking creation**
- **User authentication** (JWT token creation)
- **Rate limiting** for basic protection
- **Email support** via Nodemailer (ticket-related)

---

## Tech Stack

- **Node.js** (ES Modules)
- **Express**
- **MongoDB** (dependency present via `mongoose`, models exist)
- **Sequelize** + **sequelize-cli** (migrations folder exists)
- **JWT** (`jsonwebtoken`)
- **Password hashing** (`bcrypt`)
- **Nodemailer** (Gmail transport)
- **Winston** (logging)

---

## Project Structure

```text
src/
  index.js                         # Express app entry
  config/
    config.json
    email.config.js               # Nodemailer config
    logger-config.js             # Winston logger
    server-config.js             # Reads env vars
  controllers/
    airplane-controller.js
    airport-controller.js
    city-controller.js
    flight-controller.js
    booking-controller.js
    user-controller.js           # user/auth flow
    email-controller.js
  middlewares/
    flight-middleware.js
    airport-middlewares.js
    city-middlewares.js
    auth-request-middlewares.js
  migrations/                      # sequelize migration scripts
  models/                          # mongoose models
  repositories/                   # data-access layer
  routes/
    index.js                       # mounts v1
    v1/
      airplane-routes.js
      city-routes.js
      airport-routes.js
      flight-routes.js
      booking-routes.js
      user-routes.js
  services/
    airplane-service.js
    airport-service.js
    city-service.js
    flight-service.js
    booking-service.js
    user-service.js              # JWT + auth helpers
    email-service.js
  utils/
    response-body.js             # common success/error response shape
    common/auth.js               # JWT helpers
```

---

## Getting Started

### Prerequisites

- Node.js installed
- A running database instance (MongoDB and/or Sequelize configured by your deployment)
- Gmail credentials if you want to enable email sending

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file at the project root with (at minimum) the variables used by `src/config/server-config.js` and email:

```env
PORT=3000

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=3600
SALT_ROUNDS=10

# Email (Gmail)
GMAIL_EMAIL=your_gmail_address
GMAIL_PASS=your_gmail_app_password

# (Optional) proxy target
FLIGHT_SERVICE=http://localhost:3000
```

> The app reads environment variables via `dotenv` in `src/config/server-config.js` and uses Gmail credentials in `src/config/email.config.js`.

---

## Run the server

```bash
npm run dev
```

Server will start on `PORT` and expose routes under:

- `http://localhost:<PORT>/api/v1/...`

---

## API Endpoints

### Versioned router

All v1 routes are mounted at:

- `GET /api/v1/...`

---

### Airplanes

- **POST** `/api/v1/airplane`
- **GET** `/api/v1/airplane`
- **GET** `/api/v1/airplane/:id`

---

### Cities

- **POST** `/api/v1/city`

---

### Airports

- **POST** `/api/v1/airports`
- **GET** `/api/v1/airports`
- **GET** `/api/v1/airports/:id`
- **DELETE** `/api/v1/airports/:id`

---

### Flights

- **POST** `/api/v1/flights`
- **GET** `/api/v1/flights`
- **GET** `/api/v1/flights/:id`
- **PATCH** `/api/v1/flights/:id` (update seats)

---

### Booking

- **POST** `/api/v1/booking`

Request body (inferred from controller):

```json
{
  "flightId": "<flightId>",
  "userId": "<userId>",
  "noOfSeats": 2
}
```

---

### Auth / Users

- **POST** `/api/v1/auth/signin`

Request body (inferred from middleware and usage):

```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

> The code path uses `signinService` and returns a JWT created via `src/utils/common/auth.js`.

---

## Email (Ticket-related)

The project includes email functionality using Nodemailer.

- Email sender is configured in `src/config/email.config.js`
- Email controller exists at `src/controllers/email-controller.js`

> To enable/verify email sending, ensure Gmail credentials in `.env` are valid.

---

## Notes on Database / Migrations

- There is a `src/migrations/` directory (sequelize migrations)
- There are also `src/models/` files (mongoose models)

Depending on how you intend to run the project (MongoDB-only vs Sequelize migrations vs both), you may need to:

- Ensure the correct DB connection implementation is set up in your environment
- Run migrations if your setup uses Sequelize

---

## Troubleshooting

- **Server fails to start**
  - Verify `PORT` and required env vars exist in `.env`.
- **JWT/auth issues**
  - Ensure `JWT_SECRET` is set.
- **Email sending fails**
  - For Gmail, use an App Password and ensure `GMAIL_EMAIL` / `GMAIL_PASS` are correct.
- **Routes not found**
  - Confirm you’re using `/api/v1/...` paths.

---

## License

Add your license information here (e.g., MIT). 

---

### Acknowledgements

Built with Express and standard layered architecture (controllers → services → repositories → models).

