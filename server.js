require('dotenv').config(); // This must be at the VERY TOP

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const ss = require('socket.io-stream');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Debug logging for environment variables
console.log('Environment Variables:', {
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI ? '*****' : 'missing',
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET ? '*****' : 'missing'
});

// MongoDB Connection
const connectDB = async() => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MongoDB connection URI is not defined in environment variables');
        }

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// Initialize Express and Socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    },
    transports: ['websocket', 'polling'],
    pingTimeout: 60000,
    pingInterval: 25000,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000
});

// Connection error handling
io.engine.on("connection_error", (err) => {
    console.log("Connection error:", err.req, err.code, err.message, err.context);
});

// Connect to MongoDB before starting the server
connectDB().then(() => {
    // Middleware
    app.use(cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);

            const allowedOrigins = [
                'https://dielectica-live.onrender.com',
                'http://localhost:3000',
                'http://localhost:5000',
                'http://127.0.0.1:53730',
                process.env.FRONTEND_URL
            ].filter(Boolean);

            if (allowedOrigins.includes(origin) || origin.match(/^http:\/\/127\.0\.0\.1:\d+$/)) {
                callback(null, true);
            } else {
                console.log('CORS blocked for origin:', origin);
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
    }));

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json({ limit: '10mb' }));

    // Routes
    app.get('/api/test', (req, res) => {
        res.json({
            message: 'API is working correctly',
            dbStatus: mongoose.connection.readyState,
            environment: process.env.NODE_ENV || 'development'
        });
    });

    app.get('/api/debug/db', async(req, res) => {
        try {
            const dbStatus = mongoose.connection.readyState;
            const statusMap = {
                0: 'disconnected',
                1: 'connected',
                2: 'connecting',
                3: 'disconnecting'
            };

            res.json({
                status: statusMap[dbStatus] || 'unknown',
                mongoURI: process.env.MONGO_URI ? 'configured' : 'missing',
                models: {
                    User: !!mongoose.models.User,
                    UserStats: !!mongoose.models.userStats
                },
                connections: mongoose.connections.length
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // API Routes
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/profile', require('./routes/profile'));
    app.use('/api/stats', require('./routes/stats'));
    app.use('/api/admin', require('./routes/admin'));

    // Static Routes
    const staticRoutes = [
        '/', '/debate', '/login', '/signup', '/profile',
        '/dashboard', '/admin', '/about', '/contact',
        '/features', '/help', '/pricing'
    ];

    staticRoutes.forEach(route => {
        app.get(route, (req, res) => {
            const page = route === '/' ? 'index' : route.substring(1);
            res.sendFile(path.join(__dirname, 'public', `${page}.html`));
        });
    });

    // Socket.io Logic
    const rooms = {};
    const userRoles = {};
    app.locals.rooms = rooms;

    io.on('connection', (socket) => {
        console.log('New user connected:', socket.id);

        // [Rest of your existing socket.io logic...]
        // Keep all your existing socket.io event handlers here
    });

    // Server Listening
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`MongoDB status: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Not connected'}`);
    });

    // Keep-alive and error handling
    process.on('unhandledRejection', (err) => {
        console.error('Unhandled Rejection:', err);
    });

    process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
    });

    setInterval(() => {
        console.log('Server heartbeat - Active connections:', server._connections);
    }, 60000);
});