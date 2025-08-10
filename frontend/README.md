# Kanoonwise Frontend

React-based frontend application for the Kanoonwise legal platform.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Router**: React Router
- **HTTP Client**: Axios

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Directory Structure

```
src/
├── api/          # API integration layer
├── components/   # Reusable UI components
├── features/     # Feature-specific code
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── store/        # Redux store configuration
└── utils/        # Utility functions
```

## 🔗 API Integration

The frontend communicates with the backend API running on port 3000. API endpoints are configured in `src/api/axiosInstance.js`.

## 🎨 Styling

This project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

## 🧪 Testing

```bash
npm test
```

## 📦 Building

```bash
npm run build
```

The built files will be output to the `dist/` directory.
