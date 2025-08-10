import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { fetchClientProfile, fetchClientAppointments } from '../../store/slices/clientSlice'
import { 
  Calendar, 
  Clock, 
  Search, 
  Star, 
  TrendingUp, 
  FileText, 
  User
} from 'lucide-react'
import { format } from 'date-fns'

const ClientDashboard = () => {
  const dispatch = useDispatch()
  const { profile, appointments, isLoading } = useSelector((state) => state.client)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchClientProfile())
    dispatch(fetchClientAppointments())
  }, [dispatch])

  const upcomingAppointments = appointments.filter(apt => 
    apt.status === 'accepted' && apt.scheduled_time && new Date(apt.scheduled_time) > new Date()
  )

  const pendingAppointments = appointments.filter(apt => apt.status === 'pending')

  const quickStats = [
    {
      title: "Upcoming Consultations",
      value: upcomingAppointments.length,
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Pending Requests",
      value: pendingAppointments.length,
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Total Consultations",
      value: appointments.filter(apt => apt.status === 'completed').length,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Lawyers Consulted",
      value: new Set(appointments.map(apt => apt.lawyer_id)).size,
      icon: User,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'warning'
      case 'accepted': return 'success'
      case 'completed': return 'secondary'
      case 'cancelled': return 'destructive'
      default: return 'secondary'
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {profile?.full_name || user?.email?.split('@')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Find the right legal counsel for your needs.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link to="/client/search">
            <Button size="sm">
              <Search className="h-4 w-4 mr-2" />
              Find Lawyers
            </Button>
          </Link>
          <Link to="/client/appointments">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              My Appointments
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Consultations
            </CardTitle>
            <CardDescription>
              Your confirmed appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-3">
                {upcomingAppointments.slice(0, 3).map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{appointment.LawyerProfile?.full_name || 'Lawyer'}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.scheduled_time ? format(new Date(appointment.scheduled_time), 'MMM dd, HH:mm') : 'Date TBD'} - {appointment.consultation_type}
                      </p>
                    </div>
                    <Badge variant={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                ))}
                {upcomingAppointments.length > 3 && (
                  <Link to="/client/appointments">
                    <Button variant="ghost" size="sm" className="w-full">
                      View all {upcomingAppointments.length} appointments
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No upcoming consultations</p>
                <Link to="/client/search">
                  <Button variant="outline" size="sm" className="mt-2">
                    Book a consultation
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pending Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Pending Requests
            </CardTitle>
            <CardDescription>
              Appointments awaiting lawyer confirmation
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingAppointments.length > 0 ? (
              <div className="space-y-3">
                {pendingAppointments.slice(0, 3).map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{appointment.LawyerProfile?.full_name || 'Lawyer'}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.scheduled_time ? format(new Date(appointment.scheduled_time), 'MMM dd, HH:mm') : 'Date TBD'}
                      </p>
                    </div>
                    <Badge variant="warning">Pending</Badge>
                  </div>
                ))}
                {pendingAppointments.length > 3 && (
                  <Link to="/client/appointments">
                    <Button variant="ghost" size="sm" className="w-full">
                      View all {pendingAppointments.length} requests
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                <Clock className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No pending requests</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common actions for your legal needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/client/search">
              <Button variant="outline" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Find Lawyers
              </Button>
            </Link>
            <Link to="/client/appointments">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                My Appointments
              </Button>
            </Link>
            <Link to="/client/reviews">
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4 mr-2" />
                My Reviews
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ClientDashboard
