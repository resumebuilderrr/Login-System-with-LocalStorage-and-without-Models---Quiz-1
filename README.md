# Login System with JWT Authentication

A full-stack login and registration system built with **React** (frontend) and **Node.js + Express** (backend) using **JWT** for authentication. Includes client-side and server-side validation, protected routes, and a logout feature.

## 🔹 Features

- **User Registration**
  - Client-side validation (React)
  - Server-side validation (Express + `express-validator`)
  - Password hashing with **bcrypt**
  - JWT token generation

- **User Login**
  - Client-side validation
  - Server-side authentication
  - JWT token stored in `localStorage`
  - Protected routes

- **Homepage**
  - Accessible only to authenticated users
  - Displays user information
  - Logout functionality

- **Frontend**
  - React + React Router
  - Bootstrap for styling
  - Axios for API requests
  - AuthContext for state management

- **Backend**
  - Node.js + Express
  - MongoDB (Mongoose)
  - JWT authentication middleware
  - Separate validation and response handling files

