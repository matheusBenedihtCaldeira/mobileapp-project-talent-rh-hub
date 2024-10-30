import db_conn from "../../config/db_conn.js";

import bcrypt from'bcrypt';

export const selectProfiles = async () => {
    const query = 'SELECT * FROM tb_profiles;'; 
    const result = await db_conn.query(query);
    return result.rows;
}

export const insertProfile = async (data, user_id) => {
    // Verifica se já existe um perfil
    const checkQuery = 'SELECT id FROM tb_profiles WHERE user_id = $1;';
    const checkResult = await db_conn.query(checkQuery, [user_id]);

    if (checkResult.rowCount > 0) {
        throw new Error('Profile already exists');
    }

    // Insere um novo user
    const insertQuery = `INSERT INTO tb_profiles (
        user_id, first_name, 
        last_name, bio, location, 
        phone_number, 
        job_title, 
        departament, 
        manager_id, 
        skills, 
        education) 
        VALUES ($1, $2, $3, $4, %5, $6, $7, $8, $9, $10, $11) RETURNING id;`;
    const values = [
        user_id,
        data.first_name,
        data.last_name,
        data.bio,
        data.location,
        data.phone_number,
        data.job_title,
        data.department,
        data.manager,
        data.skills,
        data.education,
        ];
    const insertResult = await db_conn.query(insertQuery, [user_id, data.first_name, data.last_name, data.bio, data.location, data.phone_number, data.job_title, data.departament, data.manager_id, data.skills, data.education]);

    return insertResult.rows[0].id;
}

export const selectProfileById = async (id) => {
    const query = 'SELECT * FROM tb_profiles WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0) {
        throw new Error('Profile not found'); 
    }
    return res.rows[0];
}

export const updateProfileById = async (id, data) => {
    const query = `
        UPDATE profile 
        SET first_name = $1, 
            last_name = $2, 
            bio = $3, 
            location = $4, 
            phone_number = $5, 
            job_title = $6, 
            department = $7, 
            manager = $8, 
            skills = $9, 
            education = $10,
            updated_at = NOW()
        WHERE id = $11;
    `;
    const values = [
      data.first_name,
      data.last_name,
      data.bio,
      data.location,
      data.phone_number,
      data.job_title,
      data.department,
      data.manager,
      data.skills,
      data.education,
      id
    ];
  
    const res = await db_conn.query(query, values);
    if (res.rowCount === 0) {
      throw new Error('Profile not found');
    }
    return;
  };


export const deleteById = async (id) => {
    const query = 'DELETE FROM tb_profiles WHERE id = $1;'
    const values = [id]
    const res = await db_conn.query(query, values)
    if (res.rowCount === 0){
        throw new Error('User not found');
    }
    return;
}