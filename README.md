# Dialectica - Structured Debate Platform

Dialectica is a real-time web application designed to facilitate structured debates and discussions. It enables users to engage in meaningful conversations with a moderated format, supporting both participants and administrators.

## Table of Contents

- [🌟 Features](#-features)
- [⚙️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [📁 Project Structure](#-project-structure)
- [📋 Guidelines](#-guidelines)
- [🌐 Community & Support](#-community--support)
- [📄License](#-license)
  
## 🌟 Features

- **🔐User Authentication**: Secure registration and login using JWT.
- **👨‍💼Admin Dashboard**: Manage users, debates, and platform settings.
- **🏛️Debate Rooms**: Real-time, moderated debate environments.
- **👤User Profiles**: Customizable profiles with statistics and achievements.
- **💬Real-time Messaging**: Instant communication via Socket.io.
- **📱Responsive Design**: Optimized for desktop and mobile.
- **📊Statistics Tracking**: User performance and engagement metrics.

## ⚙️ Tech Stack

| Component        | Technology                         |
|------------------|------------------------------------|
| Frontend         | React.js                           |
| Backend          | Node.js, Express.js                |
| Database         | MongoDB (via Mongoose)             |
| Runtime          | Node.js                           |
| Real-time        | Socket.io                         |
| Authentication   | JWT                               |
| Styling          | CSS3, Bootstrap / Material-UI     |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/dialectica.git
   cd dialectica
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the application**
   ```sh
   npm start
   ```

5. **Development mode (auto-restart)**
   ```sh
   npm run dev
   ```

## ⚙️ Configuration

- **Database**: Update `MONGODB_URI` in `.env` for your MongoDB connection.
- **JWT Secret**: Set a strong secret in `JWT_SECRET`.
- **Port**: Default is `5000`, can be changed in `.env`.

## 🚀 Deployment

Dialectica can be deployed on:

- **Render**: Free tier, GitHub integration.
- **Railway**: $5 free credit/month.
- **Fly.io**: Free tier with multiple VMs.
- **MongoDB Atlas**: Free cloud database.

See platform documentation for deployment steps.

## 📁 Project Structure

```
Dialectica/
├── client/           # React frontend
│   ├── src/         # React source code
│   └── public/      # Public assets
├── server/          # Backend
│   ├── models/      # Mongoose models
│   ├── routes/      # Express routes
│   ├── config/      # Database config
│   └── server.js    # Main server
├── package.json     # Root scripts
└── README.md        # Documentation
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch**
   ```sh
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**
   ```sh
   git commit -m "Add your feature"
   ```
4. **Push to your branch**
   ```sh
   git push origin feature/your-feature
   ```
5. **Open a Pull Request** on GitHub

## 📋 Guidelines

- Write clear, descriptive commit messages.
- Follow existing code style and conventions.
- Add tests for new features when possible.
- Document your changes in the README if relevant.

## 🌐 Community & Support

Join our Discord server for discussions, support, and collaboration:  
**Discord:** [https://discord.gg/uc2AHnBd](https://discord.gg/uc2AHnBd)

**Special note**: GSSoC '25 contributors and mentors are welcome for better coordination and communication.

## 📄 License

Boost Software License - Version 1.0 - August 17th, 2003
