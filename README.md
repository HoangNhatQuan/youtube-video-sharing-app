
---

# VideoSharing App

## Overview

Video Youtube Sharing App is a video sharing platform. It allows users to share video show in new feeds. The project is built with a focus on scalability, performance, and ease of use.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Features

### User Management
- **Register User (Signup)**: Perform CRUD operations to manage user accounts.
- **Login (Sign-in)**: User authentication.
- **Logout**: Securely log out users.
- **Refresh Access Token**: Handle token refresh for authenticated sessions.
- **Get Current User**: Retrieve the logged-in user’s details.

### Video Management
- **Share Video**: Share url youtube by api v3 Youtube and manage video content.
- **Get All Videos**: Fetch and paginate videos with filtering.

### Notification
- **Real-Time Notifications**: Receive real-time updates when a user shares a new video.
- **Pop-Up Notifications**: Display notifications in the UI when a new video is shared.

## Installation Client

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HoangNhatQuan/youtube-video-sharing-app.git
   cd client
   ```

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the application:**
   ```bash
   pnpm run dev
   ```
## Installation Server

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HoangNhatQuan/youtube-video-sharing-app.git
   cd server
   ```

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the application:**
   ```bash
   pnpm start:dev
   ```

## Usage

1. **Server already running :**
  The server will run on the port https://youtube-video-sharing-app-hm44.onrender.com.

### Server Usage
- **User Management**
Register User: Send a POST request to /auth/sign-up with user details.
Login: Send a POST request to /auth/sign-in with credentials..
Refresh Access Token: Send a POST request to /auth/refresh with a valid refresh token.
Get Current User: Send a GET request to /users/me with a valid access token.
- **Video Management**
Share Video: Send a POST request to /videos/share with the YouTube video URL.
Get All Videos: Send a GET request to /videos with optional query parameters for filtering and pagination.

- **Notification**
Get All Notification: Send a GET request to /notification with optional query parameters for filtering and pagination.
  
2. **API Documentation:**
This project provides a comprehensive set of RESTful API endpoints to interact with the Video Sharing App, covering user management, video operations, notification and authentication.

3. **Database:** Setup on NoSQL as MongoDb

### Note

- Ensure your local server is running before testing the endpoints.
- Some endpoints may require authentication.

## Troubleshooting
### Common Issues

1. **API Requests Fail:**
- Issue: Requests to the API endpoints fail or return errors.
- Solution: Check that the API server is running and that the correct endpoints are being used. Review API documentation and ensure correct request formatting.

2. **WebSocket Connection Issues:**

- Issue: Real-time notifications are not being received.
- Solution: Ensure the WebSocket server is running and accessible. Verify that the client-side code is correctly connecting to the WebSocket server.

3. **Docker Container Issues:**
- Issue: Docker containers fail to start or run incorrectly.

## Project Structure Client and Server

# Client
```plaintext
/client
|-- /public
|-- /src
|   |-- /apis
|   |-- /app
|   |-- /components
|   |-- /configs
|   |-- /hooks
|   |-- /providers
|   |-- /static
|   |-- /ultis      
|   |-- app.js      
|   |-- index.js    
|   |-- constants.js
|-- main.tsx
|-- .gitignore
|-- .prettierignore
|-- package.json
|-- package-lock.json
```

# Server
```plaintext
/server
|-- /public
|-- /src
|   |-- /configs
|   |-- /decorators
|   |-- /guards
|   |-- /modules
|   |-- /pipelines
|   |-- providers/youtube-api         
|   |-- app.controller.ts    
|   |-- app.module.ts  
|   |-- app.service.ts
|   |-- main.ts
|-- .env.dev
|-- .gitignore
|-- .prettierignore
|-- package.json
|-- package-lock.json
```

## License

This project is licensed under the MIT License.

---

