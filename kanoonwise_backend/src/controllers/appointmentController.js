const appointmentService = require('../services/appointmentService');

const getAppointments = async (req, res, next) => {
    try {
        const appointments = await appointmentService.getLawyerAppointments(req.user.id);
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};

const respondToAppointment = async (req, res, next) => {
    try {
        const { appointmentId, status } = req.body;
        const appointment = await appointmentService.respondToAppointment(req.user.id, appointmentId, status);
        res.status(200).json(appointment);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAppointments,
    respondToAppointment,
};
