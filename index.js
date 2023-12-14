const jsonServer =require("json-server"); // importing json-server library
const server  = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port =process.env.PORT || 5000; //choose port ike 5000 or 8080 but not 3001

server.use(middlewares);
server.use(router);
server.listen(port);