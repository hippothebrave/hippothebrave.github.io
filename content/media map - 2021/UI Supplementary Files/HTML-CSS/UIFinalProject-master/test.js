
$(document).ready(function(){
    $("#m").css("display", "none");

    $("#b").click(function(){
        $("#m").css("display", "");
        $("#base").css("background-color","black");
    })
    $("#x").click(function(){
        $("#m").css("display", "none");
        
    })
})