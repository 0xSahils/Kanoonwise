import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './store'
import Layout from './components/layout/Layout'
import ProtectedRoute from './features/auth/ProtectedRoute'
import AuthProvider from './components/auth/AuthProvider'

// Auth Pages
import Login from './features/auth/Login'

// Lawyer Pages
import LawyerDashboard from './pages/lawyer/Dashboard'
import LawyerProfile from './pages/lawyer/Profile'
import LawyerCalendar from './pages/lawyer/Calendar'
import LawyerAppointments from './pages/lawyer/Appointments'

// Client Pages
import ClientDashboard from './pages/client/Dashboard'
import ClientSearch from './pages/client/Search'
import ClientAppointments from './pages/client/Appointments'
import ClientReviews from './pages/client/Reviews'
import ClientProfile from './pages/client/Profile'
import ClientLawyerProfile from './pages/client/LawyerProfile'
import BookAppointment from './pages/client/BookAppointment'

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Root redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Lawyer Routes */}
            <Route 
              path="/lawyer/dashboard" 
              element={
                <ProtectedRoute requiredRole="lawyer">
                  <LawyerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/lawyer/profile" 
              element={
                <ProtectedRoute requiredRole="lawyer">
                  <LawyerProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/lawyer/calendar" 
              element={
                <ProtectedRoute requiredRole="lawyer">
                  <LawyerCalendar />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/lawyer/appointments" 
              element={
                <ProtectedRoute requiredRole="lawyer">
                  <LawyerAppointments />
                </ProtectedRoute>
              } 
            />
            
            {/* Client Routes */}
            <Route 
              path="/client/dashboard" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/search" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientSearch />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/appointments" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientAppointments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/reviews" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientReviews />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/profile" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/lawyers/:id" 
              element={
                <ProtectedRoute requiredRole="client">
                  <ClientLawyerProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client/book" 
              element={
                <ProtectedRoute requiredRole="client">
                  <BookAppointment />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
        </Router>
      </AuthProvider>
    </Provider>
  )
}

export default App
