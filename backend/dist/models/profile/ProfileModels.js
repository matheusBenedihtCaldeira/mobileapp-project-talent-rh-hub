"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db_connjs = require('../../config/db_conn.js'); var _db_connjs2 = _interopRequireDefault(_db_connjs);

var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

 const selectProfiles = async () => {
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
  const result = await _db_connjs2.default.query(query);
  return result.rows;
}; exports.selectProfiles = selectProfiles;

 const insertProfile = async (data, user_id) => {
  try {
    // Verifica se já existe um perfil
    const checkQuery = "SELECT id FROM tb_profiles WHERE user_id = $1;";
    const checkResult = await _db_connjs2.default.query(checkQuery, [user_id]);

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
    const insertResult = await _db_connjs2.default.query(insertQuery, values);

    return insertResult.rows[0].id;
  } catch (err) {
    console.log(err);
  }
}; exports.insertProfile = insertProfile;

 const selectProfileById = async (id) => {
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
    WHERE 
      p.user_id = $1
    ORDER BY 
      p.user_id;
  `;
  const values = [id];
  const res = await _db_connjs2.default.query(query, values);
  if (res.rowCount === 0) {
    throw new Error("Profile not found");
  }
  return res.rows[0];
}; exports.selectProfileById = selectProfileById;

 const updateProfileById = async (id, data) => {
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
    id,
  ];

  const res = await _db_connjs2.default.query(query, values);
  if (res.rowCount === 0) {
    throw new Error("Profile not found");
  }
  return;
}; exports.updateProfileById = updateProfileById;

 const deleteById = async (id) => {
  const query = "DELETE FROM tb_profiles WHERE id = $1;";
  const values = [id];
  const res = await _db_connjs2.default.query(query, values);
  if (res.rowCount === 0) {
    throw new Error("User not found");
  }
  return;
}; exports.deleteById = deleteById;
