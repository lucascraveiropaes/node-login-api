import conn, { queryDealer, standartQuery } from "../dao/database";
import { sha512 }                           from "js-sha512";

class UserDAO {
    login(data, callback) {
        try {
            conn.query("SELECT * FROM users WHERE ? AND ?",
                [{ login: data.login }, { password: sha512(data.password) }],
                (err, result, fields) => queryDealer(err, result, fields, callback)
            );
        } catch (e) {
            return callback(false);
        }
    }

    list(callback) {
        return standartQuery("SELECT * FROM users", callback)
    }

    insert(data, callback) {
        try {
            const query = conn.query("INSERT INTO users SET ?", data, (err, result, fields) => queryDealer(err, result, fields, callback));
        } catch (e) {
            return callback(false);
        }
    }

    update(data, callback) {
        try {
            const id = data.id;
            delete data.id;
            const query = conn.query("UPDATE users SET ? WHERE ?", [data, { id: id }], (err, result, fields) => queryDealer(err, result, fields, callback));
        } catch (e) {
            return callback(false);
        }
    }

    delete(id, callback) {
        try {
            const query = conn.query("DELETE FROM users WHERE ?", { id: id }, (err, result, fields) => queryDealer(err, result, fields, callback));
        } catch (e) {
            return callback(false);
        }
    }
}

export default new UserDAO();
