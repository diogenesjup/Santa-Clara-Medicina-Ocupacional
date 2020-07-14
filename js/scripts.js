                        $( window ).ready(function() {

                                var superBanner = $('#superBanner').owlCarousel({
                                        loop:true,
                                        margin:0,
                                        items: 1,
                                        autoplay: true,
                                        center: true,
                                        navText: [
                                            '<img src="images/esquerda2.png" alt="Página anterior">',
                                            '<img src="images/direita2.png" alt="Próxima página">'
                                        ], 
                                        navContainer: '.custom-nav-banner',
                                        autoplayTimeout:2500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                       
                                });
                        }); 


var menu = 0;
function abrirFecharMenu(){
     
     if(menu==0){
          $('.menu-flutuante').css('right','0%');
          $('.mascara').fadeIn(500);
          menu = 1;
     }else{
          $('.menu-flutuante').css('right','-120%');
          $('.mascara').fadeOut(500);
          menu = 0;
     }

}





// MENU FIXO NAS PÁGINAS INTERNA
jQuery(document).ready(function ($) {

  var entreiAnimateNumber = 0;

  $(window).scroll(function(){


    var scroll = $(window).scrollTop();

    if (scroll < 450){
        $("header.fixo").css("top","-1000px");
        //$(".call-to-action").css("position","relative");
        //$(".call-to-action").css("z-index","998");

        entreiAnimateNumber = 0;
     }

    if (scroll > 450){
        $("header.fixo").css("top","0");
        //$(".call-to-action").css("position","fixed");
        //$(".call-to-action").css("z-index","998");
     }

     //console.log("POSIÇÃO ATUAL DO SCROLL: "+scroll);

     // ANIMATE NUMBER
     if (scroll > 1000){

        if(entreiAnimateNumber==0){

            entreiAnimateNumber = 1;

            $('.coluna-estatisticas.coluna-um h3 span')
              .prop('number', 1)
              .animateNumber(
                {
                  number: 10
                },
                6500
              );

              $('.coluna-estatisticas.coluna-dois h3 span')
              .prop('number', 250)
              .animateNumber(
                {
                  number: 146
                },
                6500
              );

              $('.coluna-estatisticas.coluna-tres h3 span')
              .prop('number', 1)
              .animateNumber(
                {
                  number: 388
                },
                6500
              );

              $('.coluna-estatisticas.coluna-quatro h3 span')
              .prop('number', 250)
              .animateNumber(
                {
                  number: 1280
                },
                6500
              );

          }

      }



  });

});
