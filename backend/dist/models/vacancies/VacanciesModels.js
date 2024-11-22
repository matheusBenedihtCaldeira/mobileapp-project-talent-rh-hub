"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs); 


 const getAllVacancies = async () => {
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
    const result = await _db_connjs2.default.query(query);
    return result.rows;
}; exports.getAllVacancies = getAllVacancies

 const getVacancyById = async (id) => {
    const query = 'SELECT * FROM tb_vacancies WHERE id = $1;'
    const values = [id]
    const res = await _db_connjs2.default.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Vacancy not found'); 
    }
    return res.rows[0];
}; exports.getVacancyById = getVacancyById

 const insertVacancies = async (data) =>{
    const query = 'INSERT INTO tb_vacancies (titulo, descricao, departamento_id, solicitante_id) VALUES ($1, $2, $3, $4) RETURNING id'; 
    const values = [data.titulo, data.descricao, data.departamento_id, data.solicitante_id]
    const result = await _db_connjs2.default.query(query, values)
    return result.rows[0].id;
}; exports.insertVacancies = insertVacancies

 const deleteVacancies = async (id) =>{
    const query = 'DELETE FROM tb_vacancies WHERE id = $1;'; 
    const values = [id]
    const result = await _db_connjs2.default.query(query, values)
    if (result.rowCount === 0) {
        throw new Error('Vacancy not found');
    }
    return;
}; exports.deleteVacancies = deleteVacancies

 const updateVacancies = async (id, data) => {
    const query = 'UPDATE tb_vacancies SET titulo = $1, descricao = $2, departamento_id = $3, solicitante_id = $4 WHERE id = $5'; 
    const values = [data.titulo, data.descricao, data.departamento_id, data.solicitante_id, id]
    const result = await _db_connjs2.default.query(query, values)
    if (result.rowCount === 0) {
        throw new Error('Vacancy not found');
    }
    return;
}; exports.updateVacancies = updateVacancies