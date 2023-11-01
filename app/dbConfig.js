const Sequelize = require('sequelize');

const dbconfig = new Sequelize('defaultdb', 'admin', 'multiweekdb', {
  host: 'XYZ.amazonaws.com',
  port: '3306', 
  dialect: 'mysql'
});

const FileData = dbconfig.define('apDB', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fileName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database (create the table if it doesn't exist)
dbconfig.sync().then(() => {
  console.log('Sequalize Conneted');
});

module.exports = { dbconfig, FileData };
