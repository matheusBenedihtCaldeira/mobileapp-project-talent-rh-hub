import db_conn from "../../config/db_conn.js";

import bcrypt from "bcrypt";

export const selectProfiles = async () => {
  const query = `
    SELECT 
      p.user_id,
      u.email,
      r.role AS role,
      p.first_name,
      p.last_name,
      p.location,
      p.phone_number,
      p.job_title,
      d.name AS department,
      m.first_name AS manager_first_name,
      m.last_name AS manager_last_name,
      p.skills,
      p.education
    FROM 
       tb_profiles p
    JOIN 
      tb_users u ON p.user_id = u.id
    LEFT JOIN 
      tb_roles r ON u.role_id = r.id
    LEFT JOIN 
      tb_profiles m ON p.manager_id = m.user_id
    LEFT JOIN 
      tb_departments d ON p.department_id = d.id
    ORDER BY 
      p.user_id;
  `;
  const result = await db_conn.query(query);
  return result.rows;
};

export const insertProfile = async (data, user_id) => {
  try {
    // Verifica se já existe um perfil
    const checkQuery = "SELECT id FROM tb_profiles WHERE user_id = $1;";
    const checkResult = await db_conn.query(checkQuery, [user_id]);

    if (checkResult.rowCount > 0) {
      throw new Error("Profile already exists");
    }

    // Insere um novo user
    const insertQuery = `INSERT INTO tb_profiles (
        user_id, 
        first_name, 
        last_name,  
        location, 
        phone_number, 
        job_title, 
        department_id, 
        manager_id, 
        skills, 
        education) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;`;
    const values = [
      user_id,
      data.first_name,
      data.last_name,
      data.location,
      data.phone_number,
      data.job_title,
      data.department_id,
      data.manager_id,
      data.skills,
      data.education,
    ];
    const insertResult = await db_conn.query(insertQuery, values);

    return insertResult.rows[0].id;
  } catch (err) {
    console.log(err);
  }
};

export const selectProfileById = async (id) => {
  const query = `
   	SELECT 
	    p.id,
      p.user_id,
      u.email,
      r.role AS role,
      p.first_name,
      p.last_name,
      p.location,
      p.phone_number,
      p.job_title,
      d.name AS department,
      p.manager_id,
	    p.department_id,
      p.skills,
      p.education,
      p.manager_id,
      r.id AS role_id
    FROM 
      tb_profiles p
    JOIN 
      tb_users u ON p.user_id = u.id
    LEFT JOIN 
      tb_roles r ON u.role_id = r.id
    LEFT JOIN 
      tb_profiles m ON p.manager_id = m.user_id
    LEFT JOIN 
      tb_departments d ON p.department_id = d.id
    WHERE 
      p.user_id = $1
    ORDER BY 
      p.user_id;
  `;
  const values = [id];
  const res = await db_conn.query(query, values);
  if (res.rowCount === 0) {
    throw new Error("Profile not found");
  }
  return res.rows[0];
};

export const updateProfileById = async (id, data) => {
  console.log(data);
  console.log("id", id);

  const query = `
    UPDATE tb_profiles 
    SET 
      first_name = $1,
      last_name = $2,
      location = $3,
      phone_number = $4,
      skills = $5,
      education = $6
    WHERE id = $7;
  `;

  const values = [
    data.first_name,
    data.last_name,
    data.location,
    data.phone_number,
    `{${data.skills.join(",")}}`, 
    `{${data.education.join(",")}}`, 
    id,
  ];

  try {
    const res = await db_conn.query(query, values);
    if (res.rowCount === 0) {
      throw new Error("Profile not found");
    }
    console.log("Profile updated successfully");
    return;
  } catch (error) {
    console.error("Error updating profile:", error.message);
    throw new Error("Failed to update profile");
  }
};


export const deleteById = async (id) => {
  const query = "DELETE FROM tb_users WHERE id = $1;";
  const values = [id];
  const res = await db_conn.query(query, values);
  if (res.rowCount === 0) {
    throw new Error("User not found");
  }
  return;
};
