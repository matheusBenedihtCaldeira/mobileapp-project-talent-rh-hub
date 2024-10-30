import db_conn from "../../config/db_conn.js";

export const selectUsers = async () => {
    const query = 'SELECT * FROM tb_users;'; 
    const result = await db_conn.query(query);
    return result.rows;
}

export const insertUser = async (data) => {
    // Verifica se a role já existe um user
    const checkQuery = 'SELECT id FROM tb_users WHERE email = $1;';
    const checkResult = await db_conn.query(checkQuery, [data.email]);

    if (checkResult.rowCount > 0) {
        throw new Error('User already exists');
    }

    // Insere um novo user
    const insertQuery = 'INSERT INTO tb_users (email, password, role_id) VALUES ($1, $2, $3) RETURNING id;';
    const insertResult = await db_conn.query(insertQuery, [data.email, data.password, data.role_id]);

    return insertResult.rows[0].id;
}

export const selectUserById = async (id) => {
    const query = 'SELECT * FROM tb_users WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('User not found'); 
    }
    return res.rows[0];
}

export const updateUserById = async (id, data) => {
    const query = `
        UPDATE tb_users 
        SET email = $1, password = $2, role_id = $3 
        WHERE id = $4;
    `;
    const values = [data.email, data.password, data.role_id, id];
    
    const res = await db_conn.query(query, values);
    if (res.rowCount === 0) {
        throw new Error('User not found');
    }
    return;
};

export const deleteById = async (id) => {
    const query = 'DELETE FROM tb_users WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0){
        throw new Error('User not found');
    }
    return;
}