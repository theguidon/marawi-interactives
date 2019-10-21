$(document).ready(function () {
    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    var item = document.getElementsByClassName("p1");
    if (isScrolledIntoView(item)){
        console.log('visible');
        $(".p1, .p2, .p3").addClass("animated fadeInDown delay-2s")
    }

    $(".scroll-triangle").click(function (e) { 
        e.preventDefault();
        $(".p1")[0].scrollIntoView()
    });

    var comeFromTop = true;
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        if (scroll >= 232 && comeFromTop){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".main-text").offset().top - 70
            }, 2000);
            comeFromTop = false;
            console.log('set comeFromTop to false');

        } else if (scroll < 232 && !comeFromTop){
            comeFromTop = true;
            console.log('set comeFromTop to true');
        }
    });
    console.log(window.pageYOffset);
});