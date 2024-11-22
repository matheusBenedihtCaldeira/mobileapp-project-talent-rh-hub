"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs);

//Async faz virar assincrona '-'
 const getAllApllicationsByVacancieId = async (id) => {
    const query = `
        SELECT 
            a.id AS application_id,
            v.titulo AS titulo_vaga,
            v.descricao AS descricao_vaga,
            u.id AS user_id,
            u.email AS user_email,
            p.first_name AS primeiro_nome,
            p.last_name AS sobrenome,
            p.education AS formacao,
            p.skills AS habilidades,
            p.job_title AS cargo_atual
        FROM 
            tb_applications a
        INNER JOIN 
            tb_vacancies v ON a.id_vaga = v.id
        INNER JOIN 
            tb_users u ON a.id_funcionario = u.id
        INNER JOIN 
            tb_profiles p ON u.id = p.user_id
        WHERE v.id = $1;

    `;
    const values = [id]
    const result = await _db_connjs2.default.query(query, values);
    return result.rows;
}; exports.getAllApllicationsByVacancieId = getAllApllicationsByVacancieId

//Insere uma nova avaliação
 const insertApplication  = async (data) => {
    const query = 'INSERT INTO tb_applications (id_funcionario, id_vaga) values ($1, $2)'; 
    const result = await _db_connjs2.default.query(query, [data.id_funcionario, data.id_vaga]);
    return result.rows[0].id;    
}; exports.insertApplication = insertApplication