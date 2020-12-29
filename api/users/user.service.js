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
                } else {
                    return callBack(null, results);
                }
            }
        )
    },
    getUsers: (callBack) => {
        pool.query(
            `select id,firstName,lastName,username,email from users`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                } 
                else {
                    return callBack(null, results);
                }
            }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select id,firstName,lastName,username,email from users where id = ? `,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                } 
                else {
                    return callBack(null, results[0]);
                }
            }
        )
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update users set firstName=?, lastName=?, username=?, email=? where id=?`,
            [
                data.firstName,
                data.lastName,
                data.username,
                data.email,
                data.id
            ],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                } 
                else {
                    return callBack(null, results);
                }
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                } 
                else {
                    return callBack(null, results);
                }
            }
        )
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from users where email=?`,
            [email],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                } 
                else {
                    return callBack(null, results[0]);
                    // result is an array, pass back the first element
                }
            }
        )
    }
}