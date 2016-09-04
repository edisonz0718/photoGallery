var express = require("express");
var router = express.Router();
var campGround = require("../models/campGround");
var mw = require("../middleware/index");

router.get("/", function(req,res){
   campGround.find({},function(err, campGrounds){
      if(err)
       console.log(err);
      else {
       res.render("campgrounds/index", {campGrounds:campGrounds , currentUser: req.user});
     }
   });
});

router.post("/", mw.isLoggedIn, function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author ={
        id: req.user._id,
        username: req.user.username
    };
     var newCampGround = {name : name, image:image , description: desc, author: author};
    campGround.create(newCampGround,function(err, campground){
       if(err)
         console.log(err);
       else
         res.redirect("/campgrounds");
    });
});

router.get("/new",mw.isLoggedIn, function(req,res){
   res.render("campgrounds/new");
});

router.get("/:id", function(req,res){
    campGround.findById(req.params.id).populate("comments").exec(function(err, foundcg){
      if(err)
        console.log(err);
      else
        res.render("campgrounds/show", {foundcg: foundcg});

    });
});

router.get('/:id/edit',mw.checkOwnership,function(req,res){
    campGround.findById(req.params.id,function(err, cg){
       if(err) 
          res.redirect("campgrounds");
       else
         res.render("campgrounds/edit",{cg:cg}); 
    });
        
    
});

router.put('/:id',mw.checkOwnership,function(req,res){
   campGround.findByIdAndUpdate(req.params.id, req.body.campground, function(err, cg){
       if(err) 
         res.redirect("/campgrounds");
       else
         res.redirect("/campgrounds/"+ cg._id);
       
   }); 
    
});

router.delete("/:id",mw.checkOwnership,function(req,res){
   campGround.findByIdAndRemove(req.params.id, function(err){
      if(err) 
       res.redirect("/campgrounds"); 
      else
       res.redirect("/campgrounds"); 
   });
});
    

module.exports = router;