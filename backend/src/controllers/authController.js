const authService = require('../services/authService');
const rateLimit = require('express-rate-limit');

const otpLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 5, // Limit each IP to 5 OTP requests per windowMs
	message: 'Too many OTP requests from this IP, please try again after an hour',
});


const requestOtp = async (req, res, next) => {
  try {
    const { email, role = 'lawyer' } = req.body;
    const result = await authService.requestOtp(email, role);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const tokens = await authService.verifyOtp(email, otp);
    res.status(200).json(tokens);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await authService.refreshAccessToken(refreshToken);
    res.status(200).json(tokens);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  requestOtp: [otpLimiter, requestOtp],
  verifyOtp,
  refreshToken,
};
