const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require("json-server-auth");

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(auth);
server.use(router);

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);
server.use(jsonServer.bodyParser); // Required to parse POST requests

// Add custom routes before JSON Server router
// server.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const users = router.db.get("users").value();
//   const user = users.find((u) => u.email === email && u.password === password);
//   if (user) {
//     res.jsonp({ success: true, message: "Logged in successfully", user });
//   } else {
//     res.jsonp({ success: false, message: "Invalid username or password" });
//   }
// });

// server.post("/register", (req, res) => {
//   const { name, password, email } = req.body;
//   const users = router.db.get("users").value();
//   const userExists = users.some((u) => u.name === name || u.email === email);
//   if (userExists) {
//     res.jsonp({ success: false, message: "Username or email already exists" });
//   } else {
//     const user = { id: Date.now(), username, password, email };
//     router.db.get("users").push(user).write();
//     res.jsonp({ success: true, message: "Registered successfully", user });
//   }
// });

// Use default JSON Server router

// Start server

server.listen(port);
