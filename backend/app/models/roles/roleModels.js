import db_conn from "../../config/db_conn.js";

export const getAllRoles = async () => {
    const query = 'SELECT * FROM tb_roles;'; 
    const result = await db_conn.query(query);
    return result.rows;
}

export const registerRole = async (data) => {
    // Verifica se a role já existe
    const checkQuery = 'SELECT id FROM tb_roles WHERE role = $1;';
    const checkResult = await db_conn.query(checkQuery, [data]);

    if (checkResult.rowCount > 0) {
        throw new Error('Role already exists'); // Lança erro se a role já existir
    }

    // Insere a nova role se ela não existir
    const insertQuery = 'INSERT INTO tb_roles (role) VALUES ($1) RETURNING id;';
    const insertResult = await db_conn.query(insertQuery, [data]);

    return insertResult.rows[0].id;
}

export const roleById = async (id) => {
    console.log(id)
    const query = 'SELECT * FROM tb_roles WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Role not found'); 
    }
    return res.rows[0];
}

export const updateRoleById = async (id, newRole) => {
    const query = 'UPDATE tb_roles SET role = $1 WHERE id = $2;';
    const values = [newRole, id];
    
    const res = await db_conn.query(query, values);
    if (res.rowCount === 0) {
        throw new Error('Role not found'); 
    }
    return;
}

export const deleteById = async (id) => {
    const query = 'DELETE FROM tb_roles WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0){
        throw new Error('Role not found');
    }
    return;
}