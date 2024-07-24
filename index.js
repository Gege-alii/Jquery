$('.open').click(function(){
    $('.sidenav').css({ width:'200px'})
    $('#text').css({marginLeft :'200px'})
})

$('.close').click(function(){
    $('.sidenav').css({ width:'0px'})
   $('#text').css({marginLeft :'0px'})
})


$('#slider .singer1').click(function(){
    $('.lyrc1').slideToggle(1000);
    $('.lyrc2').css({display:'none'});
    $('.lyrc3').css({display:'none'});
    $('.lyrc4').css({display:'none'});
});
$('#slider .singer2').click(function(){
    $('.lyrc2').slideToggle(1000);
    $('.lyrc1').css({display:'none'});
    $('.lyrc3').css({display:'none'});
    $('.lyrc4').css({display:'none'}); 
});
$('#slider .singer3').click(function(){
    $('.lyrc3').slideToggle(1000);
    $('.lyrc1').css({display:'none'});
    $('.lyrc2').css({display:'none'});
    $('.lyrc4').css({display:'none'}); 
});
$('#slider .singer4').click(function(){
    $('.lyrc4').slideToggle(1000);
    $('.lyrc1').css({display:'none'});
    $('.lyrc3').css({display:'none'});
    $('.lyrc2').css({display:'none'}); 
});


$('textarea').keydown(function() {
    var maxcharacter = 100;
  var char = maxcharacter-$(this).val().length;
 $('.totalchar').text(char);
  if(char<=0)
            {
                 $('.totalchar').text("your available character finished");   
            }

});


  $("#getting-started")
  .countdown("2026/01/01", function(event) {
    $('.days').text(
      event.strftime('%D D')
    );
    $('.hours').text(
        event.strftime('%H h')
      );
      $('.minutes').text(
        event.strftime('%M m')
      );
      $('.seconds').text(
        event.strftime('%S s')
      );
  });

$('.ll').click(function(){
    let selected=$(this).attr('href')
    let sectop=$(selected).offset().top
    console.log(sectop)
    $('body,html').animate({
        scrollTop:sectop
    },500)
})