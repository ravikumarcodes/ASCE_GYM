const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile, createOrUpdateProfile } = require('../config/profileConfig');

router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, createOrUpdateProfile);

module.exports = router;
