import {Sequelize} from "sequelize";

const db = new Sequelize('data_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

//mengatur koneksi ke database mysql