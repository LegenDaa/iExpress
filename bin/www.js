var app=require("../app");
var http=require("http");
var debug=require("debug")("app:server")
var serverConfig=require("./server.config");

app.set("port",process.env.port||serverConfig.PORT);

var server=http.createServer(app);

server.listen(process.env.port||serverConfig.PORT)
debug(`server started and listened on port ${process.env.port||serverConfig.PORT}`)
