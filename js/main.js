$(document).ready(function () {

    /***************************************************  SLIDE *************************************************************/

    var slide = $(".slide");
    var slide_paging = $(".slide_paging");
    // 슬라이드 번호
    var slideNum = 0;
    // 슬라이드 개수
    var slideLength = slide.find("li").length;
    // 광클금지 false-해제 / true-잠금
    var prot = false;

    var moveSlide = function (dir) {

        ///// 광클금지 구역 /////////
        if (prot === true) return false;
        prot = true; // 잠금
        setTimeout(function () {
            prot = false; // 잠금해제
        }, 500);
        
        $(".slide_img").removeClass("on");

        if (dir === "right") { // 슬라이드 방향이 오른쪽이라면       

            slideNum++; // 슬라이드 번호 증가
            if (slideNum === slideLength) slideNum = 0; // 슬라이드 번호가 슬라이드 개수보다 크면 슬라이드 번호를 1번으로 바꿔라.

            // 슬라이드 left 0 -> -100% 으로 이동하면서 .5초동안 애니메이션
            slide.animate({
                    left: "-100%"
                }, 500,
                function () { // 왼쪽으로 -100%만큼 이동하고 나서 할 액션

                    // 슬라이드에서 li를 찾고, 그 중 첫번째를 슬라이드의 맨 마지막번호로 이동시킨 뒤 slide의 left를 0으로 바꿔라.
                    slide.append(slide.find("li").first()).css({
                        left: "0"
                    });

                });
            
            
            slide.find("li").eq(1).addClass("on");

        } else if (dir === "left") { // 슬라이드 방향이 왼쪽이라면

            //슬라이드의 마지막li를 찾아 첫번째번호로 이동시킨 뒤 slide의 left를 -100%로 바꿔라 
            slide.prepend(slide.find("li").last()).css({
                    left: "-100%"
                })
                // 슬라이드 left -100% -> 0 으로 이동하면서 .5초동안 애니메이션
                .animate({
                    left: 0
                }, 500);

            slideNum--; // 슬라이드 순번 감소
            if (slideNum === -1) slideNum = 4; // 슬라이드 번호가 -1번이 되면 슬라이드 번호를 5번으로 바꿔라
            
            
            slide.find("li").eq(0).addClass("on");

        } ///////////// if else /////////////////
        
        $(".paging_bar").animate({left: (20*slideNum)+"%"}, 500);
        slide_paging.find("li").eq(slideNum).find(".bullet").addClass("on").parent().siblings().find(".bullet").removeClass("on");

    }; /******************************************** moveSlide **************************************/

    var autoI;
    var autoCall = function () {

        autoI = setInterval(function () { // 익명함수 구역 : 바로 실행되지 않고 기다리고 있다가 실행
            moveSlide("right"); // setInterval을 쓸때 함수에 전달값이 있을경우 익명함수 안에서 불러줘야한다
        }, 5000);

    }; /*************************** AutoCall ***************************/

    var autoT;
    var clearAuto = function () {

        clearInterval(autoI); // 자동넘김 지우기
        clearTimeout(autoT); // 타임아웃 지우기 쓰나미방지

        autoT = setTimeout(autoCall, 2000);
    }; /*************************** ClearAuto ***************************/

    autoCall();


    slide_paging.find("li").click(function () {
        
        // 광클금지
        if (prot === 1) return false;
        prot = 1; // 잠금
        setTimeout(function () {
            prot = 0; // 해제
        }, 500);
        
        clearAuto();

        var idx = $(this).index(); //블릿 순번담기
        console.log(idx);

        // 클릭된 슬라이드와 현재 슬라이드 간의 차이를 계산한다
        var diff = idx - (slideNum); // 블릿 순번에서 슬라이드 순번 빼기

        // diff 결과가 플러스 이면 현재 슬라이드 보다 큰 뒤쪽 슬라이드로 이동.
        // diff 결과가 마이너스이면 현재 슬라이드 보다 작은 앞쪽 슬라이드로 이동.

        $(".slide_img").removeClass("on");
        // 1. 클릭된 순번보다 뒤쪽 슬라이드로 이동
        if (diff > 0) {

            slide.animate({
                left: (-100 * diff) + "%"
            }, 500, function () {

                // for문으로 차이나는 수만큼 맨뒤로 이동 세팅하기.
                var temp = diff; // 임시변수(숫자변경할예정)
                for (var i = 0; i < diff; i++) {

                    temp--;
                    slide.append(slide.find("li").first()).css({
                        left: (-100 * temp) + "%"
                    });
                }

            });
            
            slide.find("li").eq(diff).addClass("on");

        }

        // 2. 클릭된 순번보다 앞쪽 슬라이드로 이동
        // 왼쪽이동버튼을 클릭한 것과 같은 이동원리임.
        else if (diff < 0) {

            // diff값이 마이너스 이므로 양수를 만들어줌
            diff = -diff;

            // for문으로 차이나는 수만큼 맨앞로 이동 세팅하기.
            var temp = 1; // 임시변수(숫자변경할예정)

            for (var i = 0; i < diff; i++) {

                slide.prepend(slide.find("li").last()).css({
                    left: (-100 * temp) + "%"
                });

                temp++;
            }

            slide.animate({
                left: 0
            }, 500);
            
            slide.find("li").eq(0).addClass("on");
        }

        // 블릿 변경 전 전역변수 슬라이드 순번 sno 에 indx값 넣기
        // 현재 이동슬라이드는 클릭된 블릿 순번과 같다.
        slideNum = idx;
        $(".paging_bar").animate({left: (20*slideNum)+"%"}, 500);
        slide_paging.find("li").eq(slideNum).find(".bullet").addClass("on").parent().siblings().find(".bullet").removeClass("on");

    });


    $("#btn_s_left").click(function () {
        clearAuto(); // 자동호출 지우기
        moveSlide("left");
    });

    $("#btn_s_right").click(function () {
        clearAuto(); // 자동호출 지우기
        moveSlide("right");
    });
    


});
