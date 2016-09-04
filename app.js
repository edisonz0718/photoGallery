var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash   = require("connect-flash");
var passport = require("passport");
var localStrategy = require("passport-local");
var methodOverride = require("method-override");
//var ppLcMongoose = require("passport-local-mongoose");
var User = require("./models/user");
//var campGround = require("./models/campGround");
//var Comment = require("./models/comment");
var seedDB     = require("./seeds");

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

console.log(process.env.DATABASEURL);

mongoose.connect(process.env.DATABASEURL);
//mongoose.connect("mongodb://yc:Fightformylife_1@ds019946.mlab.com:19946/yelpcamp_edison");
app.use(require("express-session")({
   secret : "didi", 
   resave : false,
   saveUninitialized : false

}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  res.locals.warning = req.flash("warning");
  res.locals.info = req.flash("info");
  next();
});



//seedDB();




app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT, process.env.IP , function(){
   console.log("YelpCamp started");
});
