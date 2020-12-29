const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { create, getUserById, getUsers, updateUser, deleteUser, getUserByEmail } = require('./user.service');
const { sign } = require('jsonwebtoken');

module.exports = {
    createUser: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database error"
                });
            } 
            else {
                return res.status(201).json({
                    success: 1,
                    data: results
                });
            }

        })
    },
    getUsers: (req,res) => {
        getUsers((err,results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: ""
                });
            } 
            else if (!results) {
                return res.status(404).json({
                    success:0,
                    message: "Records not found"
                });
            }
            else {
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        })
    },
    getUserById: (req,res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: ""
                });
            } 
            else if (!results) {
                return res.status(404).json({
                    success:0,
                    message: "Record not found"
                });
            }
            else {
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        });
    },
    updateUser: (req,res) => {
        const body = req.body;
        updateUser(body, (err,results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "error on updating user"
                });
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        })
    },
    deleteUser: (req,res) => {
        const body = req.body;
        deleteUser(body, (err,results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "error on deleting user"
                });
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        })
    },
    login: (req,res) => {
        const body = req.body;
        //check email of the user
        getUserByEmail(body.email, (err,results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "error on login"
                });
            } else if (!results) {
                return res.status(401).json({
                    success: 0,
                    message: "Invalid email or password"
                });
            } else {
                const r = compareSync(body.password, results.password);
                if (r) {
                    results.password = undefined;
                    const jwt = sign({
                        result:results
                    },
                    process.env.SECRET, 
                    {expiresIn: "1h"}, 
                    (err, jwt) => {
                        if (err) {
                            return res.status(401).json({
                                success: 0,
                                message: "Invalid email or password"                
                            })
                        } else {
                            return res.status(201).json({
                                success: 1,
                                message: "Login successfully",
                                token: jwt                
                            })
                        }
                    });
                } else {
                    return res.status(401).json({
                        success: 0,
                        message: "Invalid email or password"                
                    })
                }
            }
        })
    }
}