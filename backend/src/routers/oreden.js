const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const verifyToken = require('../middleware/authMiddleware'); // Asegúrate de tener el middleware para verificar el token

// Crear una nueva orden
router.post('/', verifyToken, orderController.createOrder); // Asegúrate de proteger esta ruta

// Obtener todas las órdenes del usuario autenticado
router.get('/', verifyToken, orderController.getUserOrders); // Asegúrate de proteger esta ruta

// Obtener una orden específica
router.get('/:id', verifyToken, orderController.getOrderById); // Asegúrate de proteger esta ruta

module.exports = router;
