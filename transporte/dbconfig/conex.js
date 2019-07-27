const Sequelize = require('sequelize');

//Azure DB connection Generic
/*module.exports =  new Sequelize('sigestran', 'user','pssword', {
  host: 'sigestran.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
        encrypt: true,
    }
},

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});*/


//Azure DB connection
/*module.exports =  new Sequelize('sigestran', 'hq14006','Aomar2019', {
  host: 'sigestran.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
        encrypt: true,
    }
},

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});*/

//Dalton: Azure DB connection
/* const dbConex = new Sequelize('sigestran', 'dm15012', 'Cdalton2019', {
  host: 'sigestran.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    }
  },

  //operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

}); */

//Local db connection
 /*const dbConex = new Sequelize('procu', 'hq14006', 'hq14006', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
}); */

//Local db connection
const dbConex = new Sequelize('sigestran', 'ms15050', 'ms15050', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
}); 

//Toloza: Local db connection
/*const dbConex = new Sequelize('sigestran', 'th15003', 'Kalexander2019', {
  host: 'sigestran.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    }
  },

  //operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});*/

module.exports = dbConex;