import { getUserByEmail } from "../../models/user/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const store = async (req, res) => {
  try {
    const data = req.body;

    if (!data.email || !data.password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const user = await getUserByEmail(data.email);
    if (!(await passwordIsValid(data.password, user.password))) {
      return res.status(400).json({
        error: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.TOKEN_SECRET
    );
    res.json({
      token: token,
    });
  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({
        error: "User not found",
      });
    }
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const passwordIsValid = async (passwordRequest, passwordHash) => {
  return await bcrypt.compare(passwordRequest, passwordHash);
};
