import express from "express";
import cors from "cors";

import RoleRoutes from "./routes/roleRoutes/RoleRoutes.js";
import UserRoutes from "./routes/userRoutes/UserRoutes.js";
import TokenRoutes from "./routes/tokenRoutes/tokenRoutes.js";
import ProfileRoutes from "./routes/profileRoutes/ProfileRoutes.js";
import DepartmentRoutes from "./routes/department/DepartmentRoutes.js";
import AssessmentRoutes from "./routes/assessment/AssessmentRoutes.js";
import VacanciesRoutes from ".//routes/vacanciesRoutes/VacanciesRoutes.js";
import ApplicationsRoutes from "./routes/applications/ApplicationsRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8081",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/roles", RoleRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/token", TokenRoutes);
app.use("/api/profile", ProfileRoutes);
app.use("/api/department", DepartmentRoutes);
app.use("/api/assessment", AssessmentRoutes);
app.use("/api/vacancies", VacanciesRoutes);
app.use("/api/applications", ApplicationsRoutes);

export default app;
