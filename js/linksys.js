/// GNB 링크 시스템 - linksys.js //
$(function(){ /////// jQB ///////////////////////

    var gnbName = ["회사소개", "기업정보", "제품 / 기술", "조선/해양"];

    
    $(".header_logo a").click(function(e){
        e.preventDefault();
        location.href = "index.html"; 
    });
    
    $(".gnb a").click(function(e){
        e.preventDefault();
        
        var txt = $(this).text();
        console.log(txt);
        
        var pg;
        switch(txt){
            case "회사소개": pg = "sub_company_info.html"; break;
            case "기업정보": pg = "sub_company_info.html"; break;
            case "제품 / 기술": pg = "sub_shipbuilding.html"; break;
            case "조선/해양": pg = "sub_shipbuilding.html"; break;

        }/// switch case ////////
        
        // 페이지이동
       if($.inArray(txt,gnbName) !== -1){ // 배열에 txt가 있을경우만 페이지를 이동시킴.
           /*
           
            $.inArray(value, array)
            value에는 검색하려는 값을 넣습니다.
            array에는 배열의 이름을 넣습니다.
            
            ex) jQuery.inArray("AAAA", arr); → arr이라는 배열에서 "AAAA"라는 문자를 찾습니다.
            arr에는 AAAA, BBBB, CCCC, DDDD가 있는데 
            inArray로 인덱스의 값을 찾았을 경우 AAAA에 해당하는 인덱스값은 0이고 인덱스의 값을 찾지 못했을 경우 인덱스값은 -1이 됩니다.
            indexOf와 비슷하다고 생각하시면 됩니다.
            
            그럼 BBBB를 찾을 경우 인덱스값은 1이되겠지요.
            
            */

          location.href = pg;  
       }
         
        
    });//////// click /////////////
    
    $(".location_list a").click(function(e){
        e.preventDefault();
        
        var txt = $(this).text();
        console.log(txt);
        
        var pg;
        switch(txt){
            case "회사소개": pg = "sub_company_info.html"; break;
            case "기업정보": pg = "sub_company_info.html"; break;
            case "제품 / 기술": pg = "sub_shipbuilding.html"; break;
            case "조선/해양": pg = "sub_shipbuilding.html"; break;
        }/// switch case ////////
        
        // 페이지이동
        location.href = pg;   
        
    });//////// click /////////////
    
    
    
    
});////////// jQB ///////////////////////////////
/////////////////////////////////////////////////