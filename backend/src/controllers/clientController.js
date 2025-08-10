const clientService = require('../services/clientService');

const getProfile = async (req, res, next) => {
    try {
        const profile = await clientService.getClientProfile(req.user.id);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        next(error);
    }
};

const updateProfile = async (req, res, next) => {
    try {
        const profile = await clientService.createOrUpdateClientProfile(req.user.id, req.body);
        res.status(200).json(profile);
    } catch (error) {
        next(error);
    }
};

const searchLawyers = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, ...filters } = req.query;
        const result = await clientService.searchLawyers(filters, parseInt(page), parseInt(limit));
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getAllLawyers = async (req, res, next) => {
    try {
        const { page = 1, limit = 50 } = req.query;
        const result = await clientService.getAllLawyers(parseInt(page), parseInt(limit));
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getLawyerDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const lawyer = await clientService.getLawyerById(id);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }
        res.status(200).json(lawyer);
    } catch (error) {
        next(error);
    }
};

const bookAppointment = async (req, res, next) => {
    try {
        // Get client profile first
        const clientProfile = await clientService.getClientProfile(req.user.id);
        if (!clientProfile) {
            return res.status(400).json({ message: 'Please complete your profile before booking appointments' });
        }
        
        const appointment = await clientService.bookAppointment(clientProfile.id, req.body);
        res.status(201).json(appointment);
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAppointments = async (req, res, next) => {
    try {
        // Get client profile first
        const clientProfile = await clientService.getClientProfile(req.user.id);
        if (!clientProfile) {
            return res.status(404).json({ message: 'Client profile not found' });
        }
        
        const appointments = await clientService.getClientAppointments(clientProfile.id);
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};

const cancelAppointment = async (req, res, next) => {
    try {
        // Get client profile first
        const clientProfile = await clientService.getClientProfile(req.user.id);
        if (!clientProfile) {
            return res.status(404).json({ message: 'Client profile not found' });
        }
        
        const result = await clientService.cancelAppointment(clientProfile.id, req.params.id);
        res.status(200).json(result);
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    searchLawyers,
    getAllLawyers,
    getLawyerDetails,
    bookAppointment,
    getAppointments,
    cancelAppointment
};
