var express=require("express");
var router=express.Router();
var debug=require("debug")("app:router");

router.get("/index",function(req,res,next){
    debug("Client is loading /index");
    res.render("index",{
        title:"index"
    });
})
router.get("/next",function(req,res,next){
    debug("Client is loading next");
    res.send("next");
})

module.exports=router;