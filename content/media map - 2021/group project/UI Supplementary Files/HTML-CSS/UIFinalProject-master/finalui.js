var h1 = 0, h2 = 0, h3 = 0;

function lovechange(n){
    // var s = "#love" + n;
    // alert("s: " + s);
    if(n == 1){
        if( h1 % 2 == 0){
            $("#love1").css("background", "url(heart2.png)");
            h1++;
            // alert("if: ");
        } else{
            $("#love1").css("background", "url(heart1.png)");
            h1++;
            // alert("else: ");
        }
        $("#love1").css("background-position", "center");
        $("#love1").css("background-repeat", "no-repeat");
        $("#love1").css("background-size", "contain");
        // alert("h1: " + h1);
    } else if(n == 2){
        if( h2 % 2 == 0){
            $("#love2").css("background", "url(heart2.png)");
            h2++;
        } else{
            $("#love2").css("background", "url(heart1.png)");
            h2++;
        }
        $("#love2").css("background-position", "center");
        $("#love2").css("background-repeat", "no-repeat");
        $("#love2").css("background-size", "contain");
    } else{
        if( h3 % 2 == 0){
            $("#love3").css("background", "url(heart2.png)");
            h3++;
        } else{
            $("#love3").css("background", "url(heart1.png)");
            h3++;
        }
        $("#love3").css("background-position", "center");
        $("#love3").css("background-repeat", "no-repeat");
        $("#love3").css("background-size", "contain");
    }
}

$(document).ready(function(){
    // $("#").css("","");

    $("#side").css("display","none");
    $("#blueside").css("display","none");
    $("#customside").css("display","none");
    $("#presetside").css("display","none");
    $("#movies2").css("display","none");
    $("#movies3").css("display","none");

    $("#model").css("display", "none");
    // $("#main").css("display", "none");
    // $("body").css("background-color", "#00000067");

    $("#add1").css("background", "url(add.png)");
    $("#add1").css("background-position", "center");
    $("#add1").css("background-repeat", "no-repeat");
    $("#add1").css("background-size", "contain");
    $("#add2").css("background", "url(add.png)");
    $("#add2").css("background-position", "center");
    $("#add2").css("background-repeat", "no-repeat");
    $("#add2").css("background-size", "contain");
    $("#add3").css("background", "url(add.png)");
    $("#add3").css("background-position", "center");
    $("#add3").css("background-repeat", "no-repeat");
    $("#add3").css("background-size", "contain");

    $("#edit1").css("background", "url(edit.png)");
    $("#edit1").css("background-position", "center");
    $("#edit1").css("background-repeat", "no-repeat");
    $("#edit1").css("background-size", "contain");
    $("#edit2").css("background", "url(edit.png)");
    $("#edit2").css("background-position", "center");
    $("#edit2").css("background-repeat", "no-repeat");
    $("#edit2").css("background-size", "contain");
    $("#edit3").css("background", "url(edit.png)");
    $("#edit3").css("background-position", "center");
    $("#edit3").css("background-repeat", "no-repeat");
    $("#edit3").css("background-size", "contain");

    $("#modimg").css("background", "url(clue.png)");
    $("#modimg").css("background-position", "center");
    $("#modimg").css("background-repeat", "no-repeat");
    $("#modimg").css("background-size", "contain");
    $("#star").css("background", "url(star.png)");
    $("#star").css("background-position", "center");
    $("#star").css("background-repeat", "no-repeat");
    $("#star").css("background-size", "contain");

    $("#m1").css("background", "url(reb.png)");
    $("#m1").css("background-position", "center");
    $("#m1").css("background-repeat", "no-repeat");
    $("#m1").css("background-size", "contain");
    $("#m2").css("background", "url(divi.png)");
    $("#m2").css("background-position", "center");
    $("#m2").css("background-repeat", "no-repeat");
    $("#m2").css("background-size", "contain");
    $("#m3").css("background", "url(cast.png)");
    $("#m3").css("background-position", "center");
    $("#m3").css("background-repeat", "no-repeat");
    $("#m3").css("background-size", "contain");
    $("#m4").css("background", "url(knives.png)");
    $("#m4").css("background-position", "center");
    $("#m4").css("background-repeat", "no-repeat");
    $("#m4").css("background-size", "contain");
    $("#m5").css("background", "url(midsomer.png)");
    $("#m5").css("background-position", "center");
    $("#m5").css("background-repeat", "no-repeat");
    $("#m5").css("background-size", "contain");

    $("#y1").css("background", "url(clue.png)");
    $("#y1").css("background-position", "center");
    $("#y1").css("background-repeat", "no-repeat");
    $("#y1").css("background-size", "contain");
    $("#y2").css("background", "url(rabbit.png)");
    $("#y2").css("background-position", "center");
    $("#y2").css("background-repeat", "no-repeat");
    $("#y2").css("background-size", "contain");
    $("#y3").css("background", "url(knives.png)");
    $("#y3").css("background-position", "center");
    $("#y3").css("background-repeat", "no-repeat");
    $("#y3").css("background-size", "contain");
    $("#y4").css("background", "url(det.png)");
    $("#y4").css("background-position", "center");
    $("#y4").css("background-repeat", "no-repeat");
    $("#y4").css("background-size", "contain");
    $("#y5").css("background", "url(zom.png)");
    $("#y5").css("background-position", "center");
    $("#y5").css("background-repeat", "no-repeat");
    $("#y5").css("background-size", "contain");

    $("#scarface").css("background", "url(scar.png)");
    $("#scarface").css("background-position", "center");
    $("#scarface").css("background-repeat", "no-repeat");
    $("#scarface").css("background-size", "contain");
    $("#teen").css("background", "url(teen.png)");
    $("#teen").css("background-position", "center");
    $("#teen").css("background-repeat", "no-repeat");
    $("#teen").css("background-size", "contain");
    $("#pred").css("background", "url(pred.png)");
    $("#pred").css("background-position", "center");
    $("#pred").css("background-repeat", "no-repeat");
    $("#pred").css("background-size", "contain");
    
    $("#reb").css("background", "url(reb.png)");
    $("#reb").css("background-position", "center");
    $("#reb").css("background-repeat", "no-repeat");
    $("#reb").css("background-size", "contain");
    $("#divi").css("background", "url(divi.png)");
    $("#divi").css("background-position", "center");
    $("#divi").css("background-repeat", "no-repeat");
    $("#divi").css("background-size", "contain");
    $("#cast").css("background", "url(cast.png)");
    $("#cast").css("background-position", "center");
    $("#cast").css("background-repeat", "no-repeat");
    $("#cast").css("background-size", "contain");

    $("#candy").css("background", "url(candy.png)");
    $("#candy").css("background-position", "center");
    $("#candy").css("background-repeat", "no-repeat");
    $("#candy").css("background-size", "contain");
    $("#hallow").css("background", "url(hallow.png)");
    $("#hallow").css("background-position", "center");
    $("#hallow").css("background-repeat", "no-repeat");
    $("#hallow").css("background-size", "contain");
    $("#mali").css("background", "url(mali.png)");
    $("#mali").css("background-position", "center");
    $("#mali").css("background-repeat", "no-repeat");
    $("#mali").css("background-size", "contain");

    $("#tag1").css("display", "none");
    $("#tag2").css("display", "none");
    $("#tag3").css("display", "none");

    $("#foward").css("background","url(forward.png)");
    $("#foward").css("background-position", "center");
    $("#foward").css("background-repeat", "no-repeat");
    $("#foward").css("background-size", "contain");
    $("#back").css("background","url(backward.png)");
    $("#back").css("background-position", "center");
    $("#back").css("background-repeat", "no-repeat");
    $("#back").css("background-size", "contain");

    $("#foward2").css("background","url(forward.png)");
    $("#foward2").css("background-position", "center");
    $("#foward2").css("background-repeat", "no-repeat");
    $("#foward2").css("background-size", "contain");
    $("#back2").css("background","url(backward.png)");
    $("#back2").css("background-position", "center");
    $("#back2").css("background-repeat", "no-repeat");
    $("#back2").css("background-size", "contain");

    $("#foward3").css("background","url(forward.png)");
    $("#foward3").css("background-position", "center");
    $("#foward3").css("background-repeat", "no-repeat");
    $("#foward3").css("background-size", "contain");
    $("#back3").css("background","url(backward.png)");
    $("#back3").css("background-position", "center");
    $("#back3").css("background-repeat", "no-repeat");
    $("#back3").css("background-size", "contain");

    $("#custom").css("background","url(custom.png)");
    $("#custom").css("background-position", "center");
    $("#custom").css("background-repeat", "no-repeat");
    $("#custom").css("background-size", "contain");

    $("#preset").css("background","url(preset.png)");
    $("#preset").css("background-position", "center");
    $("#preset").css("background-repeat", "no-repeat");
    $("#preset").css("background-size", "contain");

    $("#share").css("background","url(share.png)");
    $("#share").css("background-position", "center");
    $("#share").css("background-repeat", "no-repeat");
    $("#share").css("background-size", "contain");

    $("#friends").css("background","url(friends.png)");
    $("#friends").css("background-position", "center");
    $("#friends").css("background-repeat", "no-repeat");
    $("#friends").css("background-size", "contain");

    $("#collect").css("background","url(collect.png)");
    $("#collect").css("background-position", "center");
    $("#collect").css("background-repeat", "no-repeat");
    $("#collect").css("background-size", "contain");

    $("#settings").css("background","url(settings.png)");
    $("#settings").css("background-position", "center");
    $("#settings").css("background-repeat", "no-repeat");
    $("#settings").css("background-size", "contain");

    $("#1").css("background","url(bakeoff.png)");
    $("#1").css("background-position", "center");
    $("#1").css("background-repeat", "no-repeat");
    $("#1").css("background-size", "contain");

    $("#2").css("background","url(endgame.png)");
    $("#2").css("display", "none");
    $("#2l").css("display", "none");
    $("#2").css("background-position", "center");
    $("#2").css("background-repeat", "no-repeat");
    $("#2").css("background-size", "contain");
    
    $("#3").css("background","url(harrypotter.png)");
    $("#3").css("background-position", "center");
    $("#3").css("background-repeat", "no-repeat");
    $("#3").css("background-size", "contain");
    
    $("#4").css("background","url(laworder.png)");
    $("#4").css("display", "none");
    $("#4l").css("display", "none");
    $("#4").css("background-position", "center");
    $("#4").css("background-repeat", "no-repeat");
    $("#4").css("background-size", "contain");
    
    $("#5").css("background","url(meangirls.png)");
    $("#5").css("background-position", "center");
    $("#5").css("background-repeat", "no-repeat");
    $("#5").css("background-size", "contain");
    
    $("#6").css("background","url(office.png)");
    $("#6").css("display", "none");
    $("#6l").css("display", "none");
    $("#6").css("background-position", "center");
    $("#6").css("background-repeat", "no-repeat");
    $("#6").css("background-size", "contain");
    
    $("#7").css("background","url(rhoc.png)");
    $("#7").css("background-position", "center");
    $("#7").css("background-repeat", "no-repeat");
    $("#7").css("background-size", "contain");
    
    $("#8").css("background","url(shrek.png)");
    $("#8").css("display", "none");
    $("#8l").css("display", "none");
    $("#8").css("background-position", "center");
    $("#8").css("background-repeat", "no-repeat");
    $("#8").css("background-size", "contain");
    
    $("#9").css("background","url(startrek.png)");
    $("#9").css("background-position", "center");
    $("#9").css("background-repeat", "no-repeat");
    $("#9").css("background-size", "contain");

    $("#10").css("background","url(survivor.png)");    
    $("#10").css("display", "none");
    $("#10l").css("display", "none");
    $("#10").css("background-position", "center");
    $("#10").css("background-repeat", "no-repeat");
    $("#10").css("background-size", "contain");

    $("#add2").click(function(){
        $("#movies2").css("display","");
    })
    $("#love1").click(function(){
        lovechange(1);
    })
    $("#love2").click(function(){
        lovechange(2);
    })
    $("#love3").click(function(){
        lovechange(3);
    })
    $("#edit1").click(function(){
        // alert("clicked")
        $("#sidenav").css("visibility", "visible");
        $("#main").css("margin-left", "225px");
        $("#open").css("visibility", "hidden");
        $("#side").css("display", "");
        $("#blueside").css("display", "");
        $("#presetside").css("display", "none");
        $("#customside").css("display", "");
    })
    $("#edit2").click(function(){
        // alert("clicked")
        $("#sidenav").css("visibility", "visible");
        $("#main").css("margin-left", "225px");
        $("#open").css("visibility", "hidden");
        $("#side").css("display", "");
        $("#blueside").css("display", "");
        $("#presetside").css("display", "none");
        $("#customside").css("display", "");
    })
    $("#edit3").click(function(){
        $("#sidenav").css("visibility", "visible");
        $("#main").css("margin-left", "225px");
        $("#open").css("visibility", "hidden");
        $("#side").css("display", "");
        $("#blueside").css("display", "");
        $("#presetside").css("display", "none");
        $("#customside").css("display", "");
        $("#cb2").prop("checked", true);
        $("#cb7").prop("checked", true);
        $("#cb16").prop("checked", true);
        $("#tag2").css("display", "");
        $("#tag1").css("display", "");
        $("#tag3").css("display", "");
    })
    $("#open").click(function(){
        // alert("clicked")
        $("#sidenav").css("visibility", "visible");
        $("#main").css("margin-left", "225px");
        $("#open").css("visibility", "hidden");
    })
    $("#close").click(function(){
        // alert("clicked")
        $("#sidenav").css("visibility", "hidden");
        $("#main").css("margin-left", "0px");
        $("#open").css("visibility", "visible");
        $("#side").css("display", "none");
        $("#blueside").css("display", "none");
        $("#tag1").css("display", "none");
        $("#tag2").css("display", "none");
        $("#tag3").css("display", "none");
        $("#cb2").prop("checked", false);
        $("#cb7").prop("checked", false);
        $("#cb16").prop("checked", false);
    })
    $("#preset").click(function(){
        // alert("clicked")
        $("#side").css("display", "");
        $("#blueside").css("display", "none");
        $("#presetside").css("display", "");
        $("#customside").css("display", "none");
    })
    $("#custom").click(function(){
        // alert("clicked")
        $("#side").css("display", "");
        $("#blueside").css("display", "");
        $("#presetside").css("display", "none");
        $("#customside").css("display", "");
    })
    $("#back").click(function(){
        // alert("clicked")
        $("#1").css("opacity", "1");
        $("#1").css("display", "");
        $("#1l").css("display", "");

        $("#2").css("opacity", "0");
        $("#2").css("display", "none");
        $("#2l").css("display", "none");

        $("#3").css("opacity", "1");
        $("#3").css("display", "");
        $("#3l").css("display", "");

        $("#4").css("opacity", "0");
        $("#4").css("display", "none");
        $("#4l").css("display", "none");

        $("#5").css("opacity", "1");
        $("#5").css("display", "");
        $("#5l").css("display", "");
        
        $("#6").css("opacity", "0");
        $("#6").css("display", "none");
        $("#6l").css("display", "none");

        $("#7").css("opacity", "1");
        $("#7").css("display", "");
        $("#7l").css("display", "");

        $("#8").css("opacity", "0");
        $("#8").css("display", "none");
        $("#8l").css("display", "none");

        $("#9").css("opacity", "1");
        $("#9").css("display", "");
        $("#9l").css("display", "");

        $("#10").css("opacity", "0");
        $("#10").css("display", "none");
        $("#10l").css("display", "none");
    })
    $("#foward").click(function(){
        // alert("clicked")
        $("#1").css("display", "none");
        $("#1").css("opacity", "0");
        $("#1l").css("display", "none");

        $("#2").css("display", "");
        $("#2").css("opacity", "1");
        $("#2l").css("display", "");

        $("#3").css("display", "none");
        $("#3").css("opacity", "0");
        $("#3l").css("display", "none");
        
        $("#4").css("display", "");
        $("#4").css("opacity", "1");
        $("#4l").css("display", "");
        
        $("#5").css("display", "none");
        $("#5").css("opacity", "0");
        $("#5l").css("display", "none");
        
        $("#6").css("display", "");
        $("#6").css("opacity", "1");
        $("#6l").css("display", "");

        $("#7").css("display", "none");
        $("#7").css("opacity", "0");
        $("#7l").css("display", "none");

        $("#8").css("display", "");
        $("#8").css("opacity", "1");
        $("#8l").css("display", "");

        $("#9").css("display", "none");
        $("#9").css("opacity", "0");
        $("#9l").css("display", "none");
        
        $("#10").css("display", "");
        $("#10").css("opacity", "1");
        $("#10l").css("display", "");
    })
    $("#cb2").click(function(){
        $("#tag2").css("display", "");
    })
    $("#cb7").click(function(){
        $("#tag1").css("display", "");
    })
    $("#cb16").click(function(){
        $("#tag3").css("display", "");
    })
    $("#save").click(function(){
        $("#movies3").css("display", "");
    })
    $("#y1").click(function(){
        $("#model").css("display", "");
        $("#main").css("display", "none");
        $("body").css("background-color", "#00000067");
    })
    $("#x").click(function(){
        $("#model").css("display", "none");
        $("#main").css("display", "");
        $("body").css("background-color", "#FFEBC2");
    })
})
