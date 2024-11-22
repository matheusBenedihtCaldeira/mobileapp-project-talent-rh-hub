"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs);

var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 const selectUsers = async () => {
    const query = 'SELECT * FROM tb_users;'; 
    const result = await _db_connjs2.default.query(query);
    return result.rows;
}; exports.selectUsers = selectUsers

 const insertUser = async (data) => {
    // Verifica se já existe um user
    const checkQuery = 'SELECT id FROM tb_users WHERE email = $1;';
    const checkResult = await _db_connjs2.default.query(checkQuery, [data.email]);

    if (checkResult.rowCount > 0) {
        throw new Error('User already exists');
    }

    //Adiciona tratativas hash nas senhas
    const salt = await _bcrypt2.default.genSalt(12)
    const passwordHash = await _bcrypt2.default.hash(data.password, salt);
    
    // Insere um novo user
    const insertQuery = 'INSERT INTO tb_users (email, password, role_id) VALUES ($1, $2, $3) RETURNING id;';
    const insertResult = await _db_connjs2.default.query(insertQuery, [data.email, passwordHash, data.role_id]);

    return insertResult.rows[0].id;
}; exports.insertUser = insertUser

 const getUserByEmail = async(email) => {
    const query = `
        SELECT 
            u.id as id,
            u.email as email,
            u.password as password,
            r.role AS role_name
        FROM tb_users u
        INNER JOIN tb_roles r ON u.role_id = r.id
        WHERE u.email = $1;
    `;
    const values = [email]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('User not found'); 
    }
    return res.rows[0];
}; exports.getUserByEmail = getUserByEmail

 const selectUserById = async (id) => {
    const query = 'SELECT * FROM tb_users WHERE id = $1;'
    const values = [id]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('User not found'); 
    }
    return res.rows[0];
}; exports.selectUserById = selectUserById

 const updateUserById = async (id, data) => {
    const query = `
        UPDATE tb_users 
        SET email = $1, password = $2, role_id = $3 
        WHERE id = $4;
    `;
    const values = [data.email, data.password, data.role_id, id];
    
    const res = await _db_connjs2.default.query(query, values);
    if (res.rowCount === 0) {
        throw new Error('User not found');
    }
    return;
}; exports.updateUserById = updateUserById;

 const deleteById = async (id) => {
    const query = 'DELETE FROM tb_users WHERE id = $1;'
    const values = [id]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0){
        throw new Error('User not found');
    }
    return;
}; exports.deleteById = deleteById