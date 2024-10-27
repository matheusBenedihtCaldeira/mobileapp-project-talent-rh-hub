import app from "./app/app.js";
const port = '8993';

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});