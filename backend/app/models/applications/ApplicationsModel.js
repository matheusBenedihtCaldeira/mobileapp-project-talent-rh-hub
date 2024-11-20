import  db_conn  from '../../config/db_conn.js';

//Async faz virar assincrona '-'
export const getAllApllicationsByVacancieId = async (id) => {
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
    const result = await db_conn.query(query, values);
    return result.rows;
}

//Insere uma nova avaliação
export const insertApplication  = async (data) => {
    const query = 'INSERT INTO tb_applications (id_funcionario, id_vaga) values ($1, $2)'; 
    const result = await db_conn.query(query, [data.id_funcionario, data.id_vaga]);
    return result.rows[0].id;    
}