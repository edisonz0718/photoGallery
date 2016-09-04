var mongoose = require("mongoose");
var Campground = require("./models/campGround");
var Comment = require("./models/comment");
var data =[
       {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis at ante placerat sollicitudin. Sed elit enim, imperdiet in nisl pretium, fringilla cursus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Donec a nunc a ante semper euismod sit amet aliquet sem. Donec in libero eros. Nam non ultricies mauris, et pharetra mi. Sed semper urna tellus, et condimentum felis consectetur at. Proin vulputate justo in aliquam rhoncus. Aliquam vehicula ante in sagittis condimentum. Nulla bibendum lectus turpis, pulvinar blandit ante posuere eu. Cras hendrerit aliquet massa eu dignissim. Aenean at eleifend leo, et fermentum metus "
       },
       {
        name: "Desert Mesa",
        image: "https://farm3.staticflickr.com/2789/4176189296_c51043f23b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis at ante placerat sollicitudin. Sed elit enim, imperdiet in nisl pretium, fringilla cursus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Donec a nunc a ante semper euismod sit amet aliquet sem. Donec in libero eros. Nam non ultricies mauris, et pharetra mi. Sed semper urna tellus, et condimentum felis consectetur at. Proin vulputate justo in aliquam rhoncus. Aliquam vehicula ante in sagittis condimentum. Nulla bibendum lectus turpis, pulvinar blandit ante posuere eu. Cras hendrerit aliquet massa eu dignissim. Aenean at eleifend leo, et fermentum metus"
       },
       {
        name: "Canyon Floor",
        image: "https://farm8.staticflickr.com/7068/6780970858_9b0e519daf.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis at ante placerat sollicitudin. Sed elit enim, imperdiet in nisl pretium, fringilla cursus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Donec a nunc a ante semper euismod sit amet aliquet sem. Donec in libero eros. Nam non ultricies mauris, et pharetra mi. Sed semper urna tellus, et condimentum felis consectetur at. Proin vulputate justo in aliquam rhoncus. Aliquam vehicula ante in sagittis condimentum. Nulla bibendum lectus turpis, pulvinar blandit ante posuere eu. Cras hendrerit aliquet massa eu dignissim. Aenean at eleifend leo, et fermentum metus"
       }
       ];

function seedDB(){
  Campground.remove({}, function(err){
  if(err)
    console.log(err);
    console.log("removed campgrounds!");
   /* 
    data.forEach(function(seed){
     Campground.create(seed, function(err, campground){
        if(err)
         console.log(err);
         else{
         console.log("added a campground");
         Comment.create({
          text: "This is great, but I wish there was internet",
          author: "Homer"
         },function(err,comment){
           if(err)
            console.log(err);
            else{
           campground.comments.push(comment);
           campground.save();
           console.log("added a comment");
            }
         });
         }
     });
  })
  */
});

  
    

};

module.exports = seedDB;