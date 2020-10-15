$(document).ready(function () { //////////////////////////////// JQB //////////////////////////////////////////

/*

    var bodyWidth = $("body").innerWidth();
    headerWidthChange();

    $(window).resize(function () {

        bodyWidth = $("body").innerWidth();
        headerWidthChange();

    });



    // 스크롤바 넓이 구하는 함수
    function getScrollBarWidth() {
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);

        return (w1 - w2); /* 스크롤바 width*/
   /* }; */
/*
                  
    function headerWidthChange() {
        // 스무스휠 플러그인 사용후, fixed상태인 header가 스크롤바 위로 올라오는 현상을 막기위해 전체크기에서 스크롤바 넓이만큼 빼줬음.
        $(".header_wrap").css({
            width: bodyWidth - getScrollBarWidth()
        });
    }

*/



}); //////////////////////////////// JQB //////////////////////////////////////////
