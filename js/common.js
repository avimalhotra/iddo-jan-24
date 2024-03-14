$(function(){
    $(".wrap-5 .seemore").on("click",function(){
        $(".wrap-5 .row:nth-child(2) .col-4").fadeIn()
    });
    $(".wrap-7 .seemore").on("click",function(){
        $(".wrap-7 .row:nth-child(2) .col-4").fadeIn()
    });

    $(".accordion a").on("click",function(e){
        e.preventDefault();
        //$(this).next("p").slideToggle();
        //$(this).toggleClass("active");

        if( $(this).hasClass("active") ){
            //$(this).next("p").slideToggle();
            //$(this).toggleClass("active");
        }
        else{
            $(".accordion a").removeClass("active");
            $(".accordion p").slideUp();
            $(this).next("p").slideDown();
            $(this).addClass("active");
        }
    });

    $(".wrap-5 .btn").click(function(){
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){ 
            $(".wrap-5 .row:nth-child(2) .webproject,.wrap-5 .row:nth-child(2) .brandingproject").fadeIn();
        }
        else if( $(this).text()=="Website" ){ 
            $(".wrap-5 .row:nth-child(2) .col-4").fadeOut(0);
            $(".wrap-5 .row:nth-child(2) .webproject").fadeIn();
        }
        else if( $(this).text()=="Branding" ){
            $(".wrap-5 .row:nth-child(2) .col-4").fadeOut(0);
            $(".wrap-5 .row:nth-child(2) .brandingproject").fadeIn();
        }
    });

    $("header .btn").on("click",function(){
        $("body").append('<div class="overlay"></div>');
        $("body").append('<div class="popup"></div>');
        //$("html").css({"overflow-y":"hidden"});
        $(".popup").append($(".popupform").html());
        $(".popup div input[type='text']").focus()

        function hide_popup(){$(".overlay, .popup").remove()}

        $(".close, .overlay").on("click",hide_popup);
        $(window).keyup(function(e){
            if(e.which==27){ hide_popup() }
        })
    });

    const ser=$("#services").offset().top;      
    const port=$("#portfolio").offset().top;      
    const abt=$("#about").offset().top;      
    const cnt=$("#contact").offset().top;      
    const vp=$(window).height();  

    $(window).scroll(function(){
        let x=$(this).scrollLeft();
        let y=$(this).scrollTop();
        //console.log(x,y);

        if(y>=cnt-vp/2){
            $("nav a").removeClass("active");
            $("nav li:nth-child(5) a").addClass("active");
         }
        else if(y>=abt-vp/2){
            $("nav a").removeClass("active");
            $("nav li:nth-child(4) a").addClass("active");
         }
        else if(y>=port-vp/2){
            $("nav a").removeClass("active");
            $("nav li:nth-child(3) a").addClass("active");
         }
        else if(y>=ser-vp/2){
            $("nav a").removeClass("active");
            $("nav li:nth-child(2) a").addClass("active");
        }
        else{ 
            $("nav a").removeClass("active");
            $("nav li:nth-child(1) a").addClass("active");
        }

    });

    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });


    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        autoHover:true
    });

{
    const ctx = document.querySelector(".c1");

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      //labels: ['Red', 'Blue'],
      datasets: [{
        //label: '# of Votes',
        data: [75,25],
        backgroundColor: ['#ca3c3c','#0000'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
{
    const ctx = document.querySelector(".c2");

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      //labels: ['Red', 'Blue'],
      datasets: [{
        //label: '# of Votes',
        data: [50,50],
        backgroundColor: ['#ca3c3c','#0000'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
});
