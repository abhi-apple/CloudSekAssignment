# Project Name

## Overview

Briefly description of project .

## Setup Instructions

### Client (Frontend)

1. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```
2. **Run the client:**

   ```
   npm start
   ```

### Server (Backend)

1. **Install dependencies:**

   ```

   cd server
   npm install
   ```

2. **Set up environment variables:**

```
No need of any env variables , I have added them directly in the code for now
```

3. **Run Server:**

```
npm run dev
```

4. **Hosted Link:**
```
   https://cloud-sek-assignment-z98v.vercel.app/
```



### Architecture Overview

The project follows a client-server architecture with a React frontend and Node.js backend.

- **Client-side**: 
  - Built using React framework.
  - Uses React Router for navigation.
  - Styling done with Tailwind CSS.
  - Manages state with React hooks.
  - Utilizes Axios for API requests to the backend.

- **Server-side**:
  - Built using Node.js and Express framework.
  - Uses MongoDB as the database with Mongoose for object modeling.
  - RESTful API endpoints for posts and comments management.
  - Middleware includes CORS for cross-origin resource sharing and bodyParser for parsing request bodies.
  - Connects to MongoDB Atlas cloud database.

- **Deployment**:
  - Client and server deployed on Vercel.
  - Communication between client and server handled via RESTful API calls.
  
