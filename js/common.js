$(document).ready(function () { //////// JQB ///////////////////////////////


    var pgnm = location.href;
    pgnm = pgnm.split("/");
    pgnm = pgnm[pgnm.length - 1].split(".")[0];

    var wdwWidth = $(window).width();
    var mainWidth = document.querySelector(".wrap").clientWidth;

    var widthDif = wdwWidth - mainWidth;
    var res = wdwWidth - widthDif;

    $(".header_wrap").css({
        width: res + "px"
    });

    $(window).resize(function () {

        //window.location.reload();

        wdwWidth = $(window).width();
        mainWidth = document.querySelector(".wrap").clientWidth;
        widthDif = wdwWidth - mainWidth;
        res = wdwWidth - widthDif;

        $(".header_wrap").css({
            width: res + "px"
        });

    });

    $(".wrap").smoothWheel();

    // 6.탑메뉴 변경 실행여부 체크 상태 변수
    var headerSts = false; //false-실행전, true-실행후
    var scTop;

    if (pgnm.indexOf("sub") === 0) {
        var cmPos = $(".sub_nav").offset().top;
    } else {
        var cmPos = $(".cm_wrap").offset().top;
    }




    $(".wrap").scroll(function (e) {

        scTop = $(this).scrollTop();

        ///// 탑메뉴 상단에 고정하기 ////////
        // 위치: 스크롤이 2페이지 위치를 통과할때
        if (scTop > cmPos && headerSts === false) {

            headerSts = true; // 탑메뉴 변경상태 잠금(한번만 실행)

            // 탑메뉴(.top)에 미리 세팅된 class를 넣어서 디자인변경
            $(".header_wrap").addClass("on");

        } //// if //////////////////////////
        else if (scTop < cmPos && headerSts === true) { // 2 페이지 위치보다 위에 있을때 복귀하기

            headerSts = false; // 잠금(반대로)
            // 1. 먼저 위로 숨기기 애니메이션
            $(".header_wrap").removeClass("on");


        } ////////////// else if /////////////////////////


    });




    $(".gnb").hover(
        function () { // hover
            $(".header_wrap").addClass("on");
            $(".gnb_sub").stop().animate({
                opacity: 1
            }, 300);
        },
        function () { // out            

            if (scTop < cmPos) {

                $(".header_wrap").removeClass("on");
                $(".gnb_sub").stop().animate({
                    opacity: 0
                }, 300);

            } /// if /////////////////            

        }); /********** .gnb li : hover **********/


    if (pgnm.indexOf("sub") === 0) { // pgnm에 "sub"를 포함한다면 0 반환, 포함하지 않으면 -1반환. 따라서 서브페이지를 구분할 수 있음.        

        var location_change_menu = {
            "location_change_menu0": "기업정보,CEO,CI,거제조선소 소개,사업장안내,내방신청",
            "location_change_menu1": "조선 / 해양,기술개발",
            "location_change_menu2": "재무정보,주가정보,IR자료실,지배구조,공시",
            "location_change_menu3": "뉴스,선박기초상식",
            "location_change_menu4": "채용공고,입사지원가이드,인사제도,채용문의",
            "location_change_menu5": "안전경영,준법경영,윤리경영,나눔경영,경영보고서"
        }

        var location_change_sub_menu = {
            "기업정보": "개요,경영이념 / 원칙,연혁,수상이력",
            "CEO": "인사말",
            "사업장안내": "국내사업장,해외사업장",
            "조선 / 해양": "분야개요,제품소개,주요실적",
            "기술개발": "연구소소개,신공법 / 신기술,제품",
            "재무정보": "재무 하이라이트,재무제표,감사보고서,사업보고서",
            "주가정보": "현재가,분단위 시세,일자별 시세,차트분석,지수정보,외국인지분 동향",
            "지배구조": "주주,이사회,감사기구",
            "뉴스": "뉴스,나눔실천뉴스",
            "선박기초상식": "선박의 원리,선박의 종류,선박건조과정",
            "입사지원가이드": "채용절차,직무소개",
            "인사제도": "인재상,복리후생,교육제도",
            "안전경영": "안전경영방침,안전경영 추진체계,안전경영 인증 및 활동,협력회사 안전관리",
            "나눔경영": "나눔경영 소개,주요 활동내역,연도별 활동내역"
        }

        $("#location_menu").click(function () {
            $("#location_list").slideDown();
        });

        $("#location_menu").blur(function () {
            $("#location_list").slideUp();
        });

        $("#location_change_menu").click(function () {
            $("#location_change_list").slideDown();
        });

        $("#location_change_menu").blur(function () {
            $("#location_change_list").slideUp();
        });

        $("#location_change_sub_menu").click(function () {
            $("#location_change_sub_list").slideDown();
        });

        $("#location_change_sub_menu").blur(function () {
            $("#location_change_sub_list").slideUp();
        });


        $("#location_list li").click(function () {
            var liNum = $(this).index(); //선택값

            $("#location_menu").text($(this).text());

            var select_list = location_change_menu["location_change_menu" + liNum].split(","); //선택된 메뉴의 데이터
            $("#location_change_menu").text(location_change_menu["location_change_menu" + liNum].split(",")[0]); //초기화

            $("#location_change_list").html(''); //초기화

            for (var i = 0; i < select_list.length; i++) {
                $("#location_change_list").append('<li><a href="#">' + select_list[i] + '</a></li>');
            }

            listSecontMenuInit();
            $("#location_change_list li").first().trigger("click");

        }); ///////////// click ///////////////////////


        listSecontMenuInit();
        listThirdMenuInit();


    } ////////////// if //////////////////////////////////////////////////////////////

    function listSecontMenuInit() {
        $("#location_change_list li").click(function () {

            var liName = $(this).text();
            $("#location_change_menu").text(liName);

            var isName = false;

            for (var x in location_change_sub_menu) {
                if (liName === x) {
                    isName = true;
                }
            }

            if (isName) {

                var select_sub_list = location_change_sub_menu[liName].split(","); // 선택된 메뉴의 데이터
                $("#location_change_sub_menu").text(select_sub_list[0]);

                $("#location_change_sub_list").html(''); //초기화

                for (var i = 0; i < select_sub_list.length; i++) {
                    $("#location_change_sub_list").append('<li><a href="#">' + select_sub_list[i] + '</a></li>');
                }
                listThirdMenuInit();
                $("#location_change_sub_menu").show();

            } else {
                $("#location_change_sub_menu").hide();
                $("#location_change_sub_list").hide();
            }

        });

    } /////////////////////////////////////// listSecontMenuInit ///////////////////////////////////////////


    function listThirdMenuInit() {

        $("#location_change_sub_list li").click(function () {

            $("#location_change_sub_menu").text($(this).text());

        });

    } /////////////////////////////////////// listThirdMenuInit ///////////////////////////////////////////


}); //////// JQB ///////////////////////////////
