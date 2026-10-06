# Eventora

A full-stack MERN event management platform where users can browse and register for events, and admins can create and manage them.

## Features
- User registration and login with JWT authentication
- Email OTP verification using Nodemailer
- Role-based access: separate admin and user dashboards
- Admin: create and manage events
- User: browse events and register for them

## Tech Stack
- Frontend: React.js, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Auth and email: JWT, bcrypt, Nodemailer

## Project Structure
- client/ : React frontend
- server/ : Express backend

## Getting Started

1. Clone the repo: git clone https://github.com/Aastha-prog-bit/Eventora.git
2. Server: cd server, npm install, copy .env.example to .env and fill in your values, then npm start
3. Client: cd client, npm install, npm run dev
4. Optional demo data: cd server, node seed.js (development database only, it deletes existing data)

## Demo Accounts (after seeding)
- Admin: admin@eventora.com / password123
- User: user@eventora.com / password123

## Author
Aastha - https://github.com/Aastha-prog-bit
