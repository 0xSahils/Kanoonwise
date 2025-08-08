const express = require('express');
const lawyerController = require('../controllers/lawyerController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { lawyerProfileSchema } = require('../utils/validationSchemas');

const router = express.Router();

router.use(authMiddleware);

router.get('/profile', lawyerController.getProfile);
router.put('/profile', validateRequest(lawyerProfileSchema), lawyerController.updateProfile);

module.exports = router;
