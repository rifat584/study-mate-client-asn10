⭐ StudyMate — Find Your Perfect Study Partner
A MERN Stack Study Partner Matching Platform
🔗 Live Client: Add URL here
🔗 Live Server (Vercel): Add URL here
🔗 Video Demonstration: Add Video Link here
📦 Client Repo: Add GitHub Link
📦 Server Repo: Add GitHub Link

📘 Project Overview
StudyMate is a MERN Stack (MongoDB, Express, React, Node.js) based web platform designed to help students connect with the right study partners. Users can find partners by subject, expertise, experience level, and study mode — making the learning process more engaging and effective.

The project includes authentication, role-based UI updates, CRUD operations, route protection, search & filtering, partner request management, and dynamic page rendering with a beautifully designed responsive UI.

🚀 Key Features
🧭 Smart Navigation
Dynamic Navbar with different menu items before & after login
Visible profile picture with dropdown (Profile + Logout)
Protected private routes
Authentication persistence on reload
🔐 Authentication
Login & Registration with Firebase Authentication
Google Social Login
Password validation
Redirect to desired route after login
Toast notifications (success/failure)
🧑‍🏫 Partner Management (CRUD)
Create Study Partner Profile (CREATE)
View all partners with Search & Sort (READ)
Send Partner Request (Update count + store connection)
View & manage My Connections (UPDATE & DELETE)
🏠 Homepage Sections
Hero/Banner Slider
Top Rated Study Partners (based on rating)
How It Works
Testimonials/Reviews
🧩 Additional Features
Dark/Light Theme Toggle
Custom Loading Spinner
Creative 404 Page
Axios for API requests
Server-hosted on Vercel
Responsive design for all devices
🖼️ Screens Included
Home Page
Login Page
Register Page
Create Partner Profile
Find Partners
Partner Details
My Connections
Profile Page
404 Page
📂 Technology Stack
Frontend (Client)
React.js
React Router
Firebase Authentication
Tailwind CSS + DaisyUI
Axios
React Toastify / SweetAlert2
Swiper.js for sliders
React Icons
Backend (Server)
Node.js
Express.js
MongoDB Atlas
CORS
Vercel Serverless Deployment
🔥 Core Requirements Implemented
✔ Authentication
Email/Password Login
Social Login (Google)
Registration form validation
Persisted auth state
✔ CRUD Functionality
Create Partner Profile
Read/Search/Sort Partners
Update Connection Data
Delete Connection
✔ MongoDB Operations
$inc used for incrementing partnerCount
$regex used for search filtering
$set for updating connections
✔ Routing
Private Routes
Dynamic Routing — /partner/:id
Persistent Layout (Navbar + Footer)
No reload issues