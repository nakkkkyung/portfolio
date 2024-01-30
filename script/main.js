$(document).ready(function(){

    //스크롤탑값구하기
    $(window).scroll(function(){
      let sPos = $(window).scrollTop();
      console.log(sPos);

      if(850<=sPos){
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


    });

        
   