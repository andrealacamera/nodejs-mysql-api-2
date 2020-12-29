const pool = require('../../config/database');

module.exports = {
    //here the SQL commands (for the queries)
    //data, from the controller
    // callBack the cbk function
    create: (data, callBack) => {
        //query have three args: the query, the data, and the cbk funct
        //see details of the USERS table in README.md
        pool.query(
            `insert into users(firstName, lastName, username, email, password) 
            values (?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.username,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    }
}