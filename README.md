# Splasher-Site

Splasher is a basic social media site built using Node.js, Express, MySQL, and other technologies. It allows users to create accounts, log in, view their profiles, create posts (puddles) with optional text and images, comment on and like puddles, and follow other users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **Account Management:**
  - [x] Sign up for a new account.
  - [x] Log in with existing credentials.
  - [x] View and edit user profiles.

- **Puddle Management:**
  - [ ] Create puddles (posts) with optional text.
  - [ ] Upload images with puddles.
  - [ ] Like puddles.
  - [ ] Comment on puddles.

- **Following:**
  - [ ] Follow other users.

(Add more features as you implement them.)

## Installation

To run Splasher locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fernando-pulido/splasher-site.git
   ```
2. **Install dependecies:**
  ```bash
  cd splasher
  npm install
  ```
3. **Set up the database:**
  - Create a MySQL database
  - Copy the `.env.example` file to `.env` and update the database credentials.

4. **Run the application:**
    ```bash
    npm start
    ```
    OR
    ```bash
    node index.js
    ```
  
5. **Access Splasher:**
   - Open your browser and go to `http://localhost:3000`

## Usage
  - Sign Up:
        Navigate to the sign-up page and create a new account.

  - Log In:
        Log in with your credentials.

  - View Profile:
        Visit the profile page to view and edit your profile details.

  - Create a Puddle:
        (Instructions for creating puddles once the feature is implemented.)

## Technologies-Used
  - Node.js
  - Express
  - MySQL
  - Bcrypt
  - Express-session
  - Moment
  - Dotenv
