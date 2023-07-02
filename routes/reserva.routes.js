// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    getReservas,
    createReserva,
    updateReserva,
    deleteReserva
} = require ("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', getReservas);
 
// Crear una reserva
router.post('/api/', createReserva);
 
// Actualizar una reserva
router.put('/api/:id', updateReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', deleteReserva);

 
 module.exports = router;