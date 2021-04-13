const express = require("express");
const cors = require("cors");
const path = require("path");

const mainPath = require("./routes/mainRoute");
const enquiry = require("./routes/enquiryRoute");
const authRoute = require("./routes/authRoute");
const categoryRoute = require("./routes/categoryRoute");
const dashboard = require("./routes/dashboardRoute")
const cookieParser = require('cookie-parser');
const stateRoute = require("./routes/stateRoute");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
)
app.use(cookieParser());

app.use("/main", mainPath);
app.use("/auth", authRoute);
app.use("/locations", stateRoute);
app.use("/dashboard", dashboard);
app.use("/category", categoryRoute);
app.use("/enquiry", enquiry);
app.use("/images", express.static(path.join("images")))


app.listen(3001, () => {
  console.log("connected to server");
});
