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
    $("#callus").pleasecall("cssAnimation1"); 
    });

//$(document).ready(function() {
//$("#contactus").click(function() {
  //  $("#callus").show();
  //});
//});


 

    // Option 2 - jQuery Smooth Scrolling
// $('.navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
//   }
// });
