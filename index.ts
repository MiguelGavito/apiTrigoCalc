import express from "express";
//import AreaTriangleRoutes from ".src/routes/areaTriangleRoutes";
import AreaCircleRoutes from "./src/routes/areaCircleRoutes";
//import PitagoreanRoutes from ".src/routes/pitagoreanRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
//app.use("/api", AreaTriangleRoutes);
app.use("/api", AreaCircleRoutes);
//app.use("/api", PitagoreanRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
