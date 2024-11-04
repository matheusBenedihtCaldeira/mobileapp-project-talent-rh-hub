import  db_conn  from '../../config/db_conn.js';

//Async faz virar assincrona '-'
export const getAllAssessments = async () => {
    const query = 'SELECT * FROM tb_assessments';
    const result = await db_conn.query(query);
    return result.rows;

}

//Insere uma nova avaliação
export const insertAssessment  = async (data) => {
    const query = 'INSERT INTO tb_assessments (id_funcionario, id_avaliador, data_avaliacao, feedback, pontuacao) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const data_avaliacao = new Date() 
    const result = await db_conn.query(query, [data.id_funcionario, data.id_avaliador, data_avaliacao, data.feedback, data.pontuacao]);
    return result.rows[0].id;    
}

//Deleta uma avaliação
export const deleteAssessment = async (id) => {
    const query = 'DELETE FROM tb_assessments WHERE id = $1 '
    await db_conn.query(query, [id]);
    return;

}

export const getAssessmentByProfileId = async (id_funcionario) => {
    const query = 'SELECT * FROM tb_assessments WHERE id_funcionario = $1';
    const result = await db_conn.query(query, [id_funcionario]);
    return result.rows;
}

//Atualizar avaliação

export const updateAssessment = async (id, data) => {
    const query = 'UPDATE tb_assessments SET id_funcionario=$1, id_avaliador=$2, data_avaliacao=$3, feedback=$4, pontuacao=$5 WHERE id = $6';
    await db_conn.query(query, [data.id_funcionario, data.id_avaliador, data_avaliacao, data.feedback, data.pontuacao, id]);
    return;
}
