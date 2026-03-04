require("dotenv").config();
console.log("Mongo URI:", process.env.MONGO_URI);


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LoadMaster Backend Running 🚚");
});



const PORT = 5000;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));


// after all other requires
const truckRoutes = require("./routes/trucks");
app.use("/api/trucks", truckRoutes);
// after app.use(express.json())
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes); // <- important
const loadRoutes = require("./routes/load");
app.use("/api/load", loadRoutes);





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
