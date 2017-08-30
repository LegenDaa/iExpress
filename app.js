var express=require("express")
var debug=require("debug")("app:main")
var router=require("./routes/router");
var app = express();
var path=require("path")
var TemplateEngine=require("swig");

app.use(express.static("public"));

debug("start to load router")
app.use("/",router);
debug("finish to load router")

app.set("views",path.join(__dirname,"views"))

//use swig template engine to render html
var swig=new TemplateEngine.Swig({
    encoding:"utf8"
})
//add a template engine
app.engine("html",swig.renderFile);
app.set("view engine","html");

module.exports=app;