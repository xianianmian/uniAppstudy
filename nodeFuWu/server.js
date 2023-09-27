const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("./db/db.json");
const router2 = jsonServer.router("./db/db2.json");
const middlewares = jsonServer.defaults();

// 添加中间件
server.use(middlewares);

// 设置路由规则
server.use("/api1", router1);
server.use("/api2", router2);

// 启动服务器
server.listen(3000, () => {
  console.log("JSON Server is running");
  console.log("http://localhost:3000/");
});