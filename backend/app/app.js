import express from "express";

import roleRoutes from "./routes/roleRoutes/roleRoutes.js";
import userRoutes from "./routes/userRoutes/userRoutes.js";

const app = express();

app.use(express.json())

//Role routes
app.use('/api/roles', roleRoutes)

//User routes
app.use('/api/users', userRoutes)

export default app