import db_conn from "../../config/db_conn.js";

export const selectProfiles = async () => {
    const query = 'SELECT * FROM tb_profiles;'; 
    const result = await db_conn.query(query);
    return result.rows;
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