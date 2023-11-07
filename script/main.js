$(document).ready(function(){

    //스크롤탑값구하기
    $(window).scroll(function(){
      let sPos = $(window).scrollTop();
      console.log(sPos);

      if(900<=sPos){
          $('.gnb').css('opacity','1')
      }else{
          $('.gnb').css('opacity','0')
      }

      if(2425<=sPos){
      $('.skill_wrap div p').css({
        'top':'15px',
        'opacity':'1',
        'transition':'1s'
      })
      }else{
          $('.skill_wrap div p').css({
            'opacity':'0'
          })
      }
    });

    var typingBool = false; 
    var typingIdx=0; 
    
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt").text(); 
    
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    
    if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 
       typingBool=true;     
       var tyInt = setInterval(typing,100); // 반복동작 
    } 
         
    function typing(){ 
      if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[typingIdx]);
        // 한글자씩 이어준다. 
        typingIdx++; 
       } else{ 
         //끝나면 반복종료 
        clearInterval(tyInt); 
       } 
    }  
    /*메뉴 클릭시 해당섹션이동*/ 
    let gnb=$('.gnb li .circle');
    gnb.click(function(){

        let i=$(this).index()+2;
        let d=$(this).index()+2;
        console.log(i); //2,3,4,5,6...

        if(i<=2){
            $('html,body').animate({scrollTop:$('main section').eq(i).offset().top-50},400,'easeOutCubic');
            return false;
    
        }else{
            $('html,body').animate({scrollTop:$('main section').eq(d).offset().top-50},400,'easeOutCubic');
            return false;
        }

    });

    });

        
   