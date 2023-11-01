const Sequelize = require('sequelize');
const {dbconfig} = require('./dbConfig'); 

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

module.exports = FileData;
