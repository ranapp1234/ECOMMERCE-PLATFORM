const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "rana",
  password: "ratna3350@rana",
  database: "nodejs",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.get("/", (req, res) => {
  res.send("/register");
});

app.get("/register.html", (req, res) => {
  res.send(`<form action="/" name="formfill" method="post" onsubmit="return validation()" >
 <h2>Register</h2>
 <p id="result"></p>
 <div class="input-box">
   <i class='bx bx-user'></i>
   <input type="text" name="Username" placeholder="Username" />
 </div>
 <div class="input-box">
   <i class='bx bxs-envelope'></i>
   <input type="email" name="Email" placeholder="Email">
 </div>
 <div class="input-box">
   <i class='bx bxs-lock-alt'></i>
   <input type="password" name="Password" placeholder="password" />
 </div>
 <div class="input-box">
   <i class='bx bxs-lock-alt'></i>
   <input type="password" name="cPassword" placeholder="Confirm password" />
 </div>
 <div class="button">
   <input type="submit" class="btn" onclick="validation()" value="Register">
 </div>
 <div class="group">
   <span><a href="#">Forgot-Password</a></span>
   <span><a href="login.html">Login</a></span>
 </div>
</form>`);
});

app.post("/register", (req, res) => {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Password = req.body.Password;
  const cPassword = req.body.cPassword;

  let sql =
    "INSERT INTO register(Username, Email, Password, cPassword) VALUES (?, ?, ?, ?)";
  let values = [Username, Email, Password, cPassword];

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User registered...");
  });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
