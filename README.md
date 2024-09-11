# Path.ai

**Path.ai** is a web application that generates personalized learning roadmaps for various tech stacks. It features a modern interface with Google authentication, a beautiful landing page, and responsive design. Users can create, view, and manage their learning paths efficiently.

## Features

- **Google Authentication**: Secure login using Google accounts.
- **Beautiful Landing Page**: Engaging design to introduce users to the platform.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Create Roadmap**: Allows users to build customized learning plans by selecting their tech stack, skill level, and timeframe.
- **Manage Roadmaps**: View, delete, and manage all user-created roadmaps.

## Screenshots

### Landing Page

![Landing Page](./src/assets/Screenshot%202024-09-11%20174835.png)

### Create Roadmap

![Create Roadmap](./src//assets/Screenshot%202024-09-11%20175138.png)

### View and Manage Roadmaps

![View and Manage Roadmaps](./src/assets/Screenshot%202024-09-11%20175242.png)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive designs.
- **Shadcn/ui**: UI components for modern user interfaces.
- **Firebase**: Authentication and real-time database services.
- **Gemini AI**: AI service for generating personalized learning roadmaps.
- **React Router DOM**: Library for routing in React applications.
- **React Player**: Component for embedding and playing videos.

## Installation

To set up Path.ai locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/path.ai.git
   cd path.ai
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a .env file in the root directory and add the necessary environment variables for Firebase and other services. You can take help from .env.sample:

4. **Run the Application**

```bash
  npm run dev
```

The application will be available at http://localhost:5173.
