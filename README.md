# To-Do List

This is a basic to-do list web application built using Node.js, Express, MongoDB, and Pug. It's a personal project I developed after completing a node/express tutorial. While the project has a simplified structure, building it has helped me consolidate what I've learned about Node & Express by creating a full-stack app from the ground up.

## Live Demo

You can check out the live version of the application [here](https://todo-list-production-f7bd.up.railway.app/).

## Features

- **Add and Delete Tasks**: Users can add tasks to the list and delete them by clicking on them.
- **Persistent Storage**: The app uses MongoDB to store tasks, ensuring that they remain even after a page reload.
- **Rate Limiting and Security**: Implemented basic rate limiting and security headers using `express-rate-limit` and `helmet`.
- **Responsive UI**: The interface is styled with Bootstrap, offering a clean and simple user experience.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Pug (for templating)**
- **Bootstrap (for styling)**
- **Helmet (for security)**
- **Express-Rate-Limit (for rate limiting)**

## Project Structure

- **app.js**: The main application file containing server setup, database connection, and routing.
- **views/**: Contains the Pug templates for rendering the UI.
- **public/**: Contains static assets like CSS files.

## Getting Started

### Prerequisites

- **Node.js >= 20.16.0**
- **A MongoDB database**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/J-Rawnsley/todo-list
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up the MongoDB connection string in your environment variables:
   ```bash
   export CONNECT_STRING=your_mongodb_connection_string
   ```

### Running the Application

- For development (with auto-reload):
  ```bash
  npm run devstart
  ```
- For production:
  ```bash
  npm start
  ```

The application will run on `http://localhost:3000`.
