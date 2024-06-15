# ePharmacy API

The ePharmacy API is designed to facilitate the management of key pharmacy
operations, including customer management, supplier management, product
management, and order processing. This API provides comprehensive endpoints to
streamline and automate pharmacy processes, ensuring efficient and accurate
management of pharmaceutical products and related business operations.

## Features

- **User Authentication:** Log in to access your secure account.
- **Pharmacy:** Manage your supplier contacts.
- **Products:** Manage your product inventory.
- **Customers:** Manage your customer contacts.
- **Orders:** Manage your customer orders.
- **Dashboard:** View key metrics and insights.
- **Swagger Documentation:** Explore the API using interactive Swagger
  documentation.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing contact information.
- **Mongoose:** ODM library for MongoDB and Node.js.
- **Swagger:** API documentation tool for better understanding and testing.

## Backend Structure

```plaintext
backend/
|-- src/                # Source code
|   |-- config/         # Configuration files
|   |-- controllers/    # Request handlers for each route
|   |-- docs/           # API documentation files
|   |-- helpers/        # Helper functions and utilities
|   |-- middlewares/    # Middleware functions for request processing
|   |-- models/         # Data models and schemas
|   |-- routes/         # Route definitions
|   |-- services/       # Business logic services
|   |-- validators/     # Request validation schemas
|   |-- index.js        # Entry point for the application
|-- .env.example        # Example environment variables configuration
|-- package.json        # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the ePharmacy API on your local
machine for development and testing purposes.

### Prerequisites

- Node.js and npm or yarn installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/e-pharmacy.git

    cd e-pharmacy
    ```

2.  Install dependencies:

    ```bash
    # npm
    npm install

    # yarn
    yarn install
    ```

3.  Set up environment variables:

    ```bash
    cp .env.example .env
    # open .env and adjust the values according to your preferences
    ```

    ```bash
    # MongoDB URI
    MONGODB_URI=mongodb://localhost:27017/phonebook

    # Port for the server
    PORT=3000

    # JWT Secret Key for authentication
    JWT_SECRET_KEY=your-secret-key

    # SendGrid sender email and API key for email services
    SENDGRID_SENDER_EMAIL=your-sender-email@example.com
    SENDGRID_API_KEY=your-sendgrid-api-key

    # Cloudinary URL for cloud-based image storage
    CLOUDINARY_URL=your-cloudinary-url

    # Backend URL for external services integration
    BACKEND_URL=http://localhost:3000
    ```

### Run the application:

1. Run app using following command:

   ```bash
   # npm
   npm start

   # yarn
   yarn start
   ```

## API Documentation

Explore the API using the interactive Swagger documentation. Access the
documentation at:

[Swagger Documentation](https://phonebook-api-kwd5.onrender.com/api-docs)

Happy coding!
