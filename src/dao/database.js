import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_api_test"
});

conn.connect((err) => {
    if (err) throw err;
});

export function standartQuery(sql, callback) {
    try {
        conn.query(sql, function (err, result, fields) {
            if (err) return callback(false);
            else return callback(result);
        });
    } catch (e) {
        return callback(false);
    }
}

export function queryDealer(err, result, fields, callback) {
    if (err) return callback(false);
    else return callback(result);
}

export default conn;
