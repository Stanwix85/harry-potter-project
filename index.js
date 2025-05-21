// $(document).ready(function() {
//     // alert("aie")
// })
// my check
$(function(){
$.getJSON("charactures.json", function(data){
    for(var i = 0; data.length > i; i++){
        var name = data[i].name;
        var Wand = data[i].Wand;
        var dob = data[i].dob;
        var magic = data[i].magicPower;
        var description = data[i].description;
        var image = data[i].image;

        console.log(image)
    

        var msg = "<div class='fix'>"
        msg += "<img src='images/" + image + "' />"
        msg += "<ul><li id='name'>" + name + "</li>"
        msg += "<ul><li> Wand: " + Wand + "</li>"
        msg += "<ul><li> D.O.B: " + dob + "</li>"
        msg += "<ul><li> Magic score: " + magic + "</li>"
        msg += "<ul><li>" + description + "</li>" +"</div>"

        $("#card").append(msg)


}

}) // fin de json

// photo carousel
// variables
var ht = $("#film").height() + 50;
console.log(ht)
var numImg = $("#film img").length;
console.log(numImg)
var i = 0;
// random photo as backdrop
var nb = parseInt(Math.random() * numImg);
var f = $("#film img")[nb].src;
var source = "url(" + f + ")";
// console.log(source)
$("header").css({
    "background-image": source,
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center center"
})

$("#info").text(i + 1 + "/" + numImg);
// next button
$("#next").on("click", function(){
    var post = $("#film").position().top;
    var newPos = post - ht;
    if(i < numImg -1){
        if($("#film").is(":animated")){
            // no action
        }else{
            $("#film").animate({top: newPos});
            i++;
            $("#info").text(i + 1 + "/" + numImg);
        }
    }
})
 // back button
 $("#back").on("click", function(){
    var post = $("#film").position().top;
    var newPos = post + ht;

    if(i>0){
        if($("#film").is(":animated")){
            // don't do anything
        }else{
            $("#film").animate({top:newPos});
            i--;
            $("#info").text(i+ 1 + "/" + numImg);
        }
    }
})



// menu button and slide
$("#mn").on("click", function(){
    $("nav").toggle();
})

// open and close photo reel
$("#open").on("click", function(){
    $("#frame").toggle()
    
})
// $("#x-close").on("click", function(){
//     $("#frame").hide();
// })



}); //fin de load