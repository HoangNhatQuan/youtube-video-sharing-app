
---

# VideoSharing App

## Overview

Video Youtube Sharing App is a full-featured video-sharing platform similar to YouTube. It allows users to share video show in new feeds. The project is built with a focus on scalability, performance, and ease of use.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
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

- **Server already running :**
  The server will run on the port https://youtube-video-sharing-app-hm44.onrender.com.
  
- **API Documentation:**
This project provides a comprehensive set of RESTful API endpoints to interact with the VideoSharing App, covering user management, video operations, notification and authentication.

- **Database:** Setup on NoSQL as MongoDb

To facilitate testing and exploration of these endpoints

### Note

- Ensure your local server is running before testing the endpoints.
- Some endpoints may require authentication.


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

