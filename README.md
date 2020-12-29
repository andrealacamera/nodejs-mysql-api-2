# NODEJS + MYSQL API 

Based on [this video](https://www.youtube.com/watch?v=WfCJ3sHnLBM)

## ToDoList:
- Create some other data (e.g. Books or DVDs tables)
- Create other endpoints /api/books, etc.
- Test with existing database
- Decide whether using MySQL or MySQL2
- ... 

## Packages:
- Express
- Mysql (or Mysql2 -- tbd)
- Dotenv
- (dev) Nodemon
- bcrypt
- jsonwebtoken

## Example database 
DB: test_api2

TABLE(s): 
- users (id[pk], firstName, lastName, username, email, password)


### Notes:
Database configuration can be found in .env file, you have to write yourself with these variables: 

```
APP_PORT=3000 or your_app_port
DB_HOST=localhost or your_host
DB_PORT=3306 or your_port
DB_USER=your_username
DB_PASSWD=your_password
DB_DATABASE=your_database_name 
```

#### Created on 2020-12-29
#### Updated on 2020-12-29