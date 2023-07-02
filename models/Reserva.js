// TODO: Crear modelo de datos de Reserva
const {DataTypes} = require("sequelize");
const {sequelize} = require("../database")

const Reserva = sequelize.define("reserva", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_llegada:{
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        defaultValue: new Date().getTime()
    }
}, {
    timestamps: false
})

module.exports = Reserva