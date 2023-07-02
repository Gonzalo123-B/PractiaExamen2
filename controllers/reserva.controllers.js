const Reserva = require("../models/Reserva")
const ctrlReservas = {
    getReservas: async function(req, res) {
        try {
            const allReservas = await Reserva.findAll()

            if(!allReservas || allReservas.length === 0) {
                throw({
                    status: 404,
                    message: "no hay reservas"
                })
            }
            
            return res.json(allReservas)

        } catch (error) {
            res.status(error.status || 500).json(error.message || "error interno del servidor");
            
        }
    },

    createReserva: async function (req, res) {

        const {name, surname, fecha_salida, fecha_llegada, email, codigo} = req.body;

        try {
            
            const reserva = await Reserva.create({
                name,
                surname,
                fecha_salida,
                fecha_llegada,
                email,
                codigo
            });

            if(!reserva) {
                throw({
                    status: 404,
                    message: 'no se pudo crear la reserca'
                })
            }

        } catch (error) {
            res.status(error.status || 500).json(error.message || "error interno del servidor");
            
        }

    },

    updateReserva: async function (req, res){
        
        const {id} = req.params;
        const {name, surname, fecha_salida, fecha_llegada, email, codigo} = req.body;

        try {
            const reservaActualizada= await Reserva.update({
                name,
                surname,
                fecha_salida,
                fecha_llegada,
                email,
                codigo
            }, {
                where: {
                    id
                }
            })

            if(!reservaActualizada){
                throw({
                    status: 400,
                    message: "no se pudo actualizar la reserva"
                })
            }

            return res.json({
                message: "reserva actualizada correctamente",
                reservaActualizada
            })


        } catch (error) {
            res.status(error.status || 500).json(error.message || "error interno del servidor");
        }

    },

    deleteReserva: async function (req, res) {

        const {id} = req.params;

        try {
            
            const reservaEliminada = await Reserva.destroy({
                where: {
                    id
                }
            })

            if(!reservaEliminada){
                throw ({
                    status: 400,
                    message: "no se pudo eliminar la reserva"
                });
            }

            return res.json({
                reservaEliminada,
                message: "reserva eliminada correctamente"
            })

        } catch (error) {
            res.status(error.status || 500).json(error.message || "error interno del servidor");

        }

    }

};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrlReservas;