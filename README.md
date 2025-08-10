# Kanoonwise Project

A monorepo containing both frontend and backend applications for the Kanoonwise legal platform.

## 📁 Project Structure

```
kanoonwise_project/
├── frontend/           # React/Vite frontend application
│   ├── src/           # Frontend source code
│   ├── public/        # Static assets
│   ├── package.json   # Frontend dependencies
│   └── vite.config.js # Vite configuration
├── backend/           # Node.js/Express backend API
│   ├── src/          # Backend source code
│   ├── migrations/   # Database migrations
│   ├── seeders/      # Database seed data
│   ├── package.json  # Backend dependencies
│   └── .env         # Environment variables
├── shared/           # Shared utilities, types, constants
├── docs/            # Project documentation
└── README.md        # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Development

### Backend

- **Port**: 3000 (default)
- **Database**: PostgreSQL
- **API Documentation**: Check `backend/Kanoonwise.postman_collection.json`

### Frontend

- **Port**: 5173 (Vite default)
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit

## 📚 Documentation

Additional documentation can be found in the `docs/` directory:

- Profile blocking implementation details
- Redux authentication system architecture
- Original project README

## 🌐 Environment Variables

Backend environment variables are configured in `backend/.env`. See `backend/.env.example` for required variables.

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 🚀 Deployment

This monorepo structure allows for:

- Independent deployment of frontend and backend
- Shared configuration and tooling
- Centralized dependency management
- Cross-application code sharing via `shared/` directory
