"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs);

//Async faz virar assincrona '-'
 const getAllAssessments = async () => {
    const query = `
        SELECT 
            a.id AS assessment_id,
            u_funcionario.email AS funcionario_email,
            u_avaliador.email AS avaliador_email,
            a.data_avaliacao,
            a.feedback,
            a.pontuacao
        FROM 
            tb_assessments a
        JOIN 
            tb_users u_funcionario ON a.id_funcionario = u_funcionario.id
        JOIN 
            tb_users u_avaliador ON a.id_avaliador = u_avaliador.id;

    `;
    const result = await _db_connjs2.default.query(query);
    return result.rows;
}; exports.getAllAssessments = getAllAssessments

//Insere uma nova avaliação
 const insertAssessment  = async (data) => {
    const query = 'INSERT INTO tb_assessments (id_funcionario, id_avaliador, data_avaliacao, feedback, pontuacao) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const data_avaliacao = new Date() 
    const result = await _db_connjs2.default.query(query, [data.id_funcionario, data.id_avaliador, data_avaliacao, data.feedback, data.pontuacao]);
    return result.rows[0].id;    
}; exports.insertAssessment = insertAssessment

//Deleta uma avaliação
 const deleteAssessment = async (id) => {
    const query = 'DELETE FROM tb_assessments WHERE id = $1 '
    await _db_connjs2.default.query(query, [id]);
    return;

}; exports.deleteAssessment = deleteAssessment

 const getAssessmentByProfileId = async (id_funcionario) => {
    const query = `
        SELECT 
            a.id AS assessment_id,
            u_funcionario.email AS funcionario_email,
            u_avaliador.email AS avaliador_email,
            a.data_avaliacao,
            a.feedback,
            a.pontuacao
        FROM 
            tb_assessments a
        JOIN 
            tb_users u_funcionario ON a.id_funcionario = u_funcionario.id
        JOIN 
            tb_users u_avaliador ON a.id_avaliador = u_avaliador.id
        WHERE 
            id_funcionario = $1;
    `;
    const result = await _db_connjs2.default.query(query, [id_funcionario]);
    return result.rows;
}; exports.getAssessmentByProfileId = getAssessmentByProfileId

//Atualizar avaliação

 const updateAssessment = async (id, data) => {
    const query = 'UPDATE tb_assessments SET id_funcionario=$1, id_avaliador=$2, data_avaliacao=$3, feedback=$4, pontuacao=$5 WHERE id = $6';
    await _db_connjs2.default.query(query, [data.id_funcionario, data.id_avaliador, data_avaliacao, data.feedback, data.pontuacao, id]);
    return;
}; exports.updateAssessment = updateAssessment
