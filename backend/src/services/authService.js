const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateOtp } = require('../utils/otpGenerator');
const sendEmail = require('../config/email');
const { generateTokens } = require('../utils/jwtHelper');

const requestOtp = async (email, role = 'lawyer') => {
  let user = await User.findOne({ where: { email } });
  if (!user) {
    user = await User.create({ email, role });
  }

  const otp = generateOtp();
  const hashedOtp = await bcrypt.hash(otp, 10);
  const otp_expires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  user.otp = hashedOtp;
  user.otp_expires = otp_expires;
  await user.save();

  await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
  return { message: 'OTP sent to your email.' };
};

const verifyOtp = async (email, otp) => {
  const user = await User.findOne({ where: { email } });

  if (!user || !user.otp || user.otp_expires < new Date()) {
    throw new Error('OTP is invalid or has expired.');
  }

  const isMatch = await bcrypt.compare(otp, user.otp);
  if (!isMatch) {
    throw new Error('Invalid OTP.');
  }

  user.otp = null;
  user.otp_expires = null;
  await user.save();

  const tokens = generateTokens(user);
  
  return {
    token: tokens.accessToken,
    refreshToken: tokens.refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  };
};

const refreshAccessToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    
    if (!user) {
      throw new Error('User not found.');
    }

    return generateTokens(user);
  } catch {
    throw new Error('Invalid or expired refresh token.');
  }
};

module.exports = {
  requestOtp,
  verifyOtp,
  refreshAccessToken,
};
