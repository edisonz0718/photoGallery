var Comment = require("../models/comment");
var campGround = require("../models/campGround");
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req,res,next){
  if(req.isAuthenticated()){
    return next(); 
  } 
  req.flash("warning","Please Login First!");
  res.redirect("/login");
  
};
middlewareObj.checkCmOwnership = function(req,res,next){
  if(req.isAuthenticated()){
    Comment.findById(req.params.comment_id,function(err,cm){
        if(err)
          res.redirect("back");
        else{
            if(cm.author.id.equals(req.user._id)){
              next();
            }
            else{
              req.flash("warning","Permision denied");
              res.redirect("back");
            }
        }
    });  
  } else{
      req.flash("warning","Please login first");
      res.redirect("back"); 
  }    
};
middlewareObj.checkOwnership = function(req,res,next){
   if(req.isAuthenticated()){
    campGround.findById(req.params.id,function(err,cg){
        if(err)
          res.redirect("back");
        else{
            if(cg.author.id.equals(req.user._id)){
              next();
            }
            else{
              req.flash("warning","Permision denied");
              res.redirect("back");
            }
        }
    });  
  } else{
      req.flash("warning","Please login first");
      res.redirect("back"); 
  }    
    
};

module.exports = middlewareObj;