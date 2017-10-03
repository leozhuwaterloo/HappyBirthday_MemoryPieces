var styles = [
    'display: block'
    , 'line-height: 1px'
    , 'font-weight: bold'
].join(';');

function readTextFile(url)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("%c" + xhttp.responseText, styles)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

$(document).ready(function(){
    readTextFile("/static/assets/img/text_image.txt")

    function init_1(){
        $(".loader-mini1").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            if($(this).hasClass("out")){
                $(this).removeClass("out");
                $(this).css("animation-iteration-count", 'infinite');
                $(this).addClass("rotate");
            }else if($(this).hasClass("rotate")){
                $(this).removeClass("rotate");
                $(this).addClass("back");
                $(".loader-radius1").removeClass("out");
                $(".loader-radius1").addClass("back");
                $(this).animate({
                    backgroundColor: "#11DBD9"
                },4000);
            }
        });
    }
    init_1();
    $(".loader-mini1").animate({
        backgroundColor: "#FF217B"
    },4000);
    $("#unity").click(function(){
        temp_target = $(".loader-mini1");
        if(temp_target.hasClass("rotate")){
            temp_target.css("animation-iteration-count", '1');
        }else if(temp_target.hasClass("back")){
            temp_target.removeClass("back");
            temp_target.addClass("out");
            $(".loader-radius1").removeClass("back");
            $(".loader-radius1").addClass("out");
            temp_target.animate({
                backgroundColor: "#FF217B"
            },4000);
            temp_target.css("animation-iteration-count", '');
            init_1();
        }
    });


    function init_2(){
        $(".loader-mini2").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            if($(this).hasClass("out")){
                $(this).removeClass("out");
                $(this).css("animation-iteration-count", 'infinite');
                $(this).addClass("rotate");
            }else if($(this).hasClass("rotate")){
                $(this).removeClass("rotate");
                $(this).addClass("back");
                $(".loader-radius2").removeClass("out");
                $(".loader-radius2").addClass("back");
                $(this).animate({
                    backgroundColor: "#11DBD9"
                },4000);
            }
        });
    }
    init_2();
    $(".loader-mini2").animate({
        backgroundColor: "#FF7878"
    },4000);
    $("#java").click(function(){
        temp_target = $(".loader-mini2");
        if(temp_target.hasClass("rotate")){
            temp_target.css("animation-iteration-count", '1');
        }else if(temp_target.hasClass("back")){
            temp_target.removeClass("back");
            temp_target.addClass("out");
            $(".loader-radius2").removeClass("back");
            $(".loader-radius2").addClass("out");
            temp_target.animate({
                backgroundColor: "#FF7878"
            },4000);
            temp_target.css("animation-iteration-count", '');
            init_2();
        }
    });





    function init_3(){
        $(".loader-mini3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            if($(this).hasClass("out")){
                $(this).removeClass("out");
                $(this).css("animation-iteration-count", 'infinite');
                $(this).addClass("rotate");
            }else if($(this).hasClass("rotate")){
                $(this).removeClass("rotate");
                $(this).addClass("back");
                $(".loader-radius3").removeClass("out");
                $(".loader-radius3").addClass("back");
                $(this).animate({
                    backgroundColor: "#11DBD9"
                },4000);
            }
        });
    }
    init_3();
    $(".loader-mini3").animate({
        backgroundColor: "#FFA283"
    },4000);
    $("#python").click(function(){
        temp_target = $(".loader-mini3");
        if(temp_target.hasClass("rotate")){
            temp_target.css("animation-iteration-count", '1');
        }else if(temp_target.hasClass("back")){
            temp_target.removeClass("back");
            temp_target.addClass("out");
            $(".loader-radius3").removeClass("back");
            $(".loader-radius3").addClass("out");
            temp_target.animate({
                backgroundColor: "#FFA283"
            },4000);
            temp_target.css("animation-iteration-count", '');
            init_3();
        }
    });


    //
    function init_4(){
        $(".loader-mini4").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            if($(this).hasClass("out")){
                $(this).removeClass("out");
                $(this).css("animation-iteration-count", 'infinite');
                $(this).addClass("rotate");
            }else if($(this).hasClass("rotate")){
                $(this).removeClass("rotate");
                $(this).addClass("back");
                $(".loader-radius4").removeClass("out");
                $(".loader-radius4").addClass("back");
                $(this).animate({
                    backgroundColor: "#11DBD9"
                },4000);
            }
        });
    }
    init_4();
    $(".loader-mini4").animate({
        backgroundColor: "#962A4E"
    },4000);
    $("#html").click(function(){
        temp_target = $(".loader-mini4");
        if(temp_target.hasClass("rotate")){
            temp_target.css("animation-iteration-count", '1');
        }else if(temp_target.hasClass("back")){
            temp_target.removeClass("back");
            temp_target.addClass("out");
            $(".loader-radius4").removeClass("back");
            $(".loader-radius4").addClass("out");
            temp_target.animate({
                backgroundColor: "#962A4E"
            },4000);
            temp_target.css("animation-iteration-count", '');
            init_4();
        }
    });
});
