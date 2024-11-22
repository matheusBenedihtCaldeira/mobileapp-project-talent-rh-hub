"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs);

 const getAllRoles = async () => {
    const query = 'SELECT * FROM tb_roles;'; 
    const result = await _db_connjs2.default.query(query);
    return result.rows;
}; exports.getAllRoles = getAllRoles

 const registerRole = async (data) => {
    // Verifica se a role já existe
    const checkQuery = 'SELECT id FROM tb_roles WHERE role = $1;';
    const checkResult = await _db_connjs2.default.query(checkQuery, [data]);

    if (checkResult.rowCount > 0) {
        throw new Error('Role already exists'); // Lança erro se a role já existir
    }

    // Insere a nova role se ela não existir
    const insertQuery = 'INSERT INTO tb_roles (role) VALUES ($1) RETURNING id;';
    const insertResult = await _db_connjs2.default.query(insertQuery, [data]);

    return insertResult.rows[0].id;
}; exports.registerRole = registerRole

 const roleById = async (id) => {
    console.log(id)
    const query = 'SELECT * FROM tb_roles WHERE id = $1;'
    const values = [id]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Role not found'); 
    }
    return res.rows[0];
}; exports.roleById = roleById

 const updateRoleById = async (id, newRole) => {
    const query = 'UPDATE tb_roles SET role = $1 WHERE id = $2;';
    const values = [newRole, id];
    
    const res = await _db_connjs2.default.query(query, values);
    if (res.rowCount === 0) {
        throw new Error('Role not found'); 
    }
    return;
}; exports.updateRoleById = updateRoleById

 const deleteById = async (id) => {
    const query = 'DELETE FROM tb_roles WHERE id = $1;'
    const values = [id]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0){
        throw new Error('Role not found');
    }
    return;
}; exports.deleteById = deleteById