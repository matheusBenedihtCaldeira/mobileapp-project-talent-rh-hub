import db_conn from "../../config/db_conn.js";

export const selectDepartments = async () => {
    const query = 'SELECT * FROM tb_departments;'; 
    const result = await db_conn.query(query);
    return result.rows;
}

export const insertDepartment = async (data) => {
    // Verifica se já existe um user
    const checkQuery = 'SELECT id FROM tb_departments WHERE name = $1;';
    const checkResult = await db_conn.query(checkQuery, [data.name]);

    if (checkResult.rowCount > 0) {
        throw new Error('Department already exists');
    }
    
    // Insere um novo departamento
    const insertQuery = 'INSERT INTO tb_departments (name) VALUES ($1) RETURNING id;';
    const insertResult = await db_conn.query(insertQuery, [data.name]);

    return insertResult.rows[0].id;
}

export const selectDepartmentById = async (id) => {
    const query = 'SELECT * FROM tb_departments WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Department not found'); 
    }
    return res.rows[0];
}

export const updatedDepartmentById = async (id, data) => {
    const query = `
        UPDATE tb_departments 
        SET name = $1 
        WHERE id = $2;
    `;
    const values = [data.name, id];
    
    const res = await db_conn.query(query, values);
    if (res.rowCount === 0) {
        throw new Error('Department not found');
    }
    return;
};

export const deleteById = async (id) => {
    const query = 'DELETE FROM tb_departments WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0){
        throw new Error('Department not found');
    }
    return;
}