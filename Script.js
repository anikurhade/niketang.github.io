window.onload = function load() {
    //Preloader 
    setTimeout(() => {
        $('.loader').fadeOut(500);
    }, 100);
}
window.onscroll = function () {
    NavBarPos();
}

function NavBarPos() {
    if (Math.max(document.body.scrollTop, window.pageYOffset) >= 60) {
        $(".menu").addClass("sticky");
        $(".logo").css({
            "lineHeight": "40px",
            "fontSize": "20px"
        });
        $("#totop").show();
        $("ul").css({
            "background-color": "black",
            "color": "white"
        });
        $(".toggle").css("filter", "invert(0)");
        $("ul").mouseleave(function () {
            $(".toggle").css("filter", "invert(0)");
        });
    } else {
        $(".toggle").css("filter", "invert(1)");
        $("ul").mouseleave(function () {
            $(".toggle").css("filter", "invert(1)");
        });
        $(".menu").removeClass("sticky");
        $(".logo").css({
            "lineHeight": "80px",
            "fontSize": "25px"
        });
        $("#totop").hide();
        if (($(".item").hasClass("active"))) {
            $(".navbar").css("paddingBottom", "145px");
            $("ul").css({
                "background-color": "black",
                "color": "white"
            });
        } else {
            $(".navbar").css("paddingBottom", "25px");
            $("ul").css({
                "background-color": "transparent",
                "color": "black"
            });
        }
    }
}

function toggle() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
        $(".menu .toggle img").toggle();
        if (Math.max(document.body.scrollTop, window.pageYOffset) <= 60) {
            $("ul").css({
                "background-color": "transparent",
                "color": "black"
            });
            $(".toggle").css("filter", "invert(1)");
            $(".navbar").css("paddingBottom", "25px");
        }
    } else {
        $(".item").addClass("active");
        $(".menu .toggle img").toggle();
        if (Math.max(document.body.scrollTop, window.pageYOffset) <= 60) {
            $("ul").css({
                "background-color": "black",
                "color": "white"
            });
            $(".toggle").css("filter", "invert(0)");
            $(".navbar").css("paddingBottom", "145px");
        }
    }
}

$(document).ready(function () {
    $("ul").hover(function () {
        $(".toggle").css("filter", "invert(0)");
    }, function () {
        $(".toggle").css("filter", "invert(1)");
    });
});