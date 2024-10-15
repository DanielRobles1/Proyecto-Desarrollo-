const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware'); // Asegúrate de que este middleware esté implementado

// Ruta para registrar usuario
router.post('/register', userController.register);

// Ruta para iniciar sesión
router.post('/login', userController.login);

// Ruta para obtener perfil de usuario
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;
