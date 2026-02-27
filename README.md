# Simple Node.js Routing Server

A basic Node.js HTTP server that handles routing using the built-in `http` module.  
This project demonstrates how the GET method works and how to serve different HTML pages.

---

## Features

- Handles multiple routes:
  - `/` → Welcome Page
  - `/home` → Home Page
  - `/about` → About Page
  - `/contact` → Contact Page
- Uses GET method for routing
- Returns:
  - `200 OK` for valid routes
  - `404 Not Found` for invalid routes
  - `405 Method Not Allowed` for unsupported methods
- Built using only Node.js core `http` module

---

## Technologies Used

- Node.js
- HTTP Module

---

### To install the application

`npm init`

## To run the application

`npm run dev`