const Sequelize = require('sequelize');
const db = require('../dbconfig/conex');
const Cities = require('./m_city');

const Department = db.define('department', {
    cnr_code: {
        type: Sequelize.STRING(2),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        get(){
            return this.getDataValue('name');
        },
        validate: {
            notEmpty: true,
        }
    },
    created_by: {
        type: Sequelize.INTEGER
    },
    updated_by: {
        type: Sequelize.INTEGER
    },
}, {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

Department.hasMany(Cities, {
    foreignKey: 'department_id'
});

module.exports = Department;