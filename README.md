# E-Pharmacy App

## Description

The E-Pharmacy App is designed to facilitate the management of key pharmacy
operations, including customer management, supplier management, product
management, and order processing.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

### Requirements

- [NodeJS](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` files in the `backend` and `frontend` folders.

### Global

#### Technologies

1. [JavaScript](https://tc39.es/ecma262/)
2. [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)

### Backend

#### Technologies

1. [Node.js](https://nodejs.org/en) — a JavaScript runtime environment
2. [Express](https://expressjs.com/) — a web application framework for Node.js
3. [MongoDB](https://www.mongodb.com/) — a NoSQL database
4. [Mongoose](https://mongoosejs.com/) — an ODM (Object Data Modeling) library for MongoDB and Node.js
5. [Swagger](https://swagger.io/) — an API documentation tool

#### Folder Structure

```plaintext
backend/
|-- src/                # Source code
|   |-- config/         # Configuration files
|   |-- controllers/    # Request handlers for each route
|   |-- docs/           # API documentation files
|   |-- middlewares/    # Middleware functions for request processing
|   |-- models/         # Data models and schemas
|   |-- routes/         # Route definitions
|   |-- services/       # Business logic services
|   |-- utils/          # Helper functions and utilities
|   |-- validators/     # Request validation schemas
|   |-- index.js        # Entry point for the application
|-- .env.example        # Example environment variables configuration
|-- package.json        # Project configuration and dependencies
```

### Frontend

#### Technologies

1. [React](https://react.dev/) — a frontend library
2. [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager
3. [react-router-dom](https://reactrouter.com/en/main) — a routing library
4. [react-hook-form](https://react-hook-form.com/) — a form management library
5. [styled-components](https://styled-components.com/) — a CSS-in-JS library

#### Folder Structure

```plaintext
frontend/
|-- src/                  # Source code
|   |-- assets/           # Static assets such as images, fonts, etc.
|   |-- components/       # Reusable React components
|   |-- config/           # Configuration files
|   |-- hooks/            # Custom React hooks
|   |-- pages/            # React components representing pages of the app
|   |-- routes/           # App routes
|   |-- services/         # Services for handling API calls, etc.
|   |-- store/            # Redux store configuration, actions, reducers, etc.
|   |-- styles/           # Global and theme styles
|   |-- utils/            # General utility functions and helper modules
|   |-- App.jsx           # Main App component
|   |-- main.jsx          # Entry point for rendering the React app
|-- package.json          # Project configuration and dependencies
```

## Installation

1.  Get [Node.js](https://nodejs.org/en/ "Node.js") (LTS). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

    ```
    node -v  // for checking Node.js version
    npm -v // for checking npm version
    ```

2.  Clone project`s [repo](https://github.com/y-hrubskyi/e-pharmacy.git):

    ```
    git clone https://github.com/y-hrubskyi/e-pharmacy.git
    ```

## How to Run

### Manually

1. Create and fill all .env files. These files are:

- backend/.env

You should use .env.example files as a reference.

1. Install dependencies: `npm install`.

2. Run backend: `npm run dev -w backend`

3. Run frontend: `npm run dev -w frontend`

## Documentation

### API Documentation

For detailed API documentation, please refer to our Swagger documentation:

[Swagger Documentation](https://e-pharmacy-0e2p.onrender.com/api-docs)
