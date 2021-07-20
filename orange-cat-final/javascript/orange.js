//when #schedule clicked diplay #show
/*$(table).hide();
$('#schedule').click(function(){
    $(table).show();
  });
  */
 //selector.click( over, out )
 /*$( document ).ready(function());
$('.show').hide();
$("#schedule").click(function(){
    $('.show').show();
},function(){
    $('.show').show();
});
$(".exit").click(function(){
    $('.show').hide();
});
  */


$(document).ready(function() {
$("#ishow").toggle();
$("#schedule").on('click', function() {
    $("#ishow").toggle();
  });
});

 $(document).ready(function() {
    $("#callus").toggle();
    $("#contactus").on('click', function() {
        $("#callus").toggle();
      });
    });

$(document).ready(function() {
$("#exit").click(function(){
    $('#ishow').hide();
    });
});

$(document).ready(function() {
    $("#exitcontact").click(function(){
        $('#callus').hide();
        });
});


$(document).ready(function() {
    $("#contactus").click(function(){
        $(animationCss).show();
        });
});
