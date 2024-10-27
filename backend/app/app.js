import express from "express";
import roleRoutes from "./routes/roleRoutes/roleRoutes.js";

const app = express();

app.use(express.json())

// Role routes
app.use('/api/roles', roleRoutes)

export default app