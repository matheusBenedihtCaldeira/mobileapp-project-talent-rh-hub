import db_conn from "../../config/db_conn.js"; 


export const getAllVacancies = async () => {
    const query = ` 
        SELECT 
    v.id,
    v.titulo,
    v.descricao,
    v.departamento_id,
    d.name AS nome_departamento,
    v.solicitante_id,
    s.email AS nome_solicitante
FROM 
    tb_vacancies v
INNER JOIN 
    tb_departments d ON v.departamento_id = d.id
INNER JOIN 
    tb_users s ON v.solicitante_id = s.id;

    `; 
    const result = await db_conn.query(query);
    return result.rows;
}

export const getVacancyById = async (id) => {
    const query = 'SELECT * FROM tb_vacancies WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Vacancy not found'); 
    }
    return res.rows[0];
}

export const insertVacancies = async (data) =>{
    const query = 'INSERT INTO tb_vacancies (titulo, descricao, departamento_id, solicitante_id) VALUES ($1, $2, $3, $4) RETURNING id'; 
    const values = [data.titulo, data.descricao, data.departamento_id, data.solicitante_id]
    const result = await db_conn.query(query, values)
    return result.rows[0].id;
}

export const deleteVacancies = async (id) =>{
    const query = 'DELETE FROM tb_vacancies WHERE id = $1;'; 
    const values = [id]
    const result = await db_conn.query(query, values)
    if (result.rowCount === 0) {
        throw new Error('Vacancy not found');
    }
    return;
}

export const updateVacancies = async (id, data) => {
    const query = 'UPDATE tb_vacancies SET titulo = $1, descricao = $2, departamento_id = $3, solicitante_id = $4 WHERE id = $5'; 
    const values = [data.titulo, data.descricao, data.departamento_id, data.solicitante_id, id]
    const result = await db_conn.query(query, values)
    if (result.rowCount === 0) {
        throw new Error('Vacancy not found');
    }
    return;
}