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
    }

    $(".scroll-triangle").click(function (e) { 
        e.preventDefault();
        $(".p1")[0].scrollIntoView()
    });

    var comeFromTop = true;
    var aboveNarratives = true;
    var secondScrollPos = $(".scroll-down-top2").offset().top - 450;
    $(window).scroll(function (event) {
        console.log(`secondScrollPos: ${secondScrollPos}`);
        var scroll = $(window).scrollTop();
        console.log(`scroll: ${scroll}`);
        // Do something
        if (scroll >= 232 && comeFromTop){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".main-text").offset().top - 70
            }, 2000);
            comeFromTop = false;
            console.log('set comeFromTop to false');
            $(".p1, .p2, .p3").addClass("animated fadeInDown delay-2s")

        } else if (scroll < 232 && !comeFromTop){
            comeFromTop = true;
            console.log('set comeFromTop to true');
        } else if (scroll >= secondScrollPos && aboveNarratives){
            aboveNarratives = false;
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".the-narratives-header").offset().top - 70
            }, 2000);
        } else if (scroll < secondScrollPos && !aboveNarratives){
            aboveNarratives = true;
            console.log('aboveNarratives set to true')
        }
    });
    console.log(window.pageYOffset);
});