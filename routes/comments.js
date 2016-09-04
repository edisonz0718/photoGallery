var express = require("express");
var router = express.Router({mergeParams : true});
var campGround = require("../models/campGround");
var Comment = require("../models/comment");
var mw = require("../middleware/index");

//new
router.get("/new",mw.isLoggedIn,function(req,res){
    campGround.findById(req.params.id, function(err,cg){
        if(err)
         console.log(err);
        else
          res.render("comments/new", {cg:cg});
    });
    
});
//create
router.post("/",mw.isLoggedIn,function(req,res){
    campGround.findById(req.params.id, function(err,cg){
        if(err){
         console.log(err);
         res.redirect("/campgrounds/" + cg._id);
        }
        else{
            Comment.create(req.body.comment, function(err,cm){
                if(err)
                  console.log(err);
                else{
                cm.author.id = req.user._id;// by passport
                cm.author.username = req.user.username;// by passport
                cm.save();
                cg.comments.push(cm);
                cg.save();
                res.redirect("/campgrounds/"+ cg._id);
                }
            });
          
        }
    });
    
});

router.get("/:comment_id/edit",mw.checkCmOwnership,function(req,res){
    campGround.findById(req.params.id, function(err,cg){
        if(err)
         console.log(err);
        else{
          Comment.findById(req.params.comment_id, function(err,cm){
            if(err)
              res.redirect("back");
            else             
              res.render("comments/edit", {cg:cg,cm:cm});
          });
        }
    });
    
});

router.put("/:comment_id",mw.checkCmOwnership,function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,cm){
        if(err)
          res.redirect("back");
        else
          res.redirect("/campgrounds/"+req.params.id);
        
    });
});

router.delete("/:comment_id",mw.checkCmOwnership,function(req,res){
   Comment.findByIdAndRemove(req.params.comment_id,function(err){
       if(err) 
         res.redirect("back");
       else
         res.redirect("/campgrounds/" + req.params.id);
   }); 
    
});

module.exports = router;