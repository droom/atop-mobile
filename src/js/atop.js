jQuery(document).ready(function($){


  var productArr = [{
    "title"  : "VWA—01",
    "colour" : "purple",
    "code"   : "vwa01",
    "hex"    : "bf5ea1",
    "backing": false,
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445454&productid=VWA-01"
  },
  {
    "title"  : "VWA—02",
    "colour" : "yellow",
    "code"   : "vwa02",
    "hex"    : "f3d54f",
    "reverse": false,
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445457&productid=VWA-02"
  },
  {
    "title"  : "VWA-03",
    "colour" : "green",
    "code"   : "vwa03",
    "hex"    : "c0d17b",
    "reverse": false,
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445456&productid=VWA-03"
  },
  {
    "title"  : "VWA-04",
    "colour" : "light blue",
    "code"   : "vwa04",
    "hex"    : "1ba4d3",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445451&productid=VWA-04"
  },
  {
    "title"  : "VWA-05",
    "colour" : "red",
    "code"   : "vwa05",
    "hex"    : "ff271a",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445450&productid=VWA-05"
  },
  {
    "title"  : "VWA-06",
    "colour" : "orange",
    "code"   : "vwa06",
    "hex"    : "fe4e00",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445453&productid=VWA-06"
  },
  {
    "title"  : "VWA-07",
    "colour" : "black",
    "code"   : "vwa07",
    "hex"    : "000000",
    "url"    : "http://ideahouse.com.my/images/product/VWA_07_008_ATOP%20Watch_Colorful%20Series_Black_TN.jpg"
  },
  {
    "title"  : "VWA-08",
    "colour" : "white/black",
    "code"   : "vwa08",
    "hex"    : "e4e4e4",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E2544545D&productid=VWA-08"
  },
  {
    "title"  : "VWA-09",
    "colour" : "grey",
    "code"   : "vwa09",
    "hex"    : "4a4f4d",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E2544545C&productid=VWA-09"
  },
  {
    "title"  : "VWA-10",
    "colour" : "white",
    "code"   : "vwa10",
    "hex"    : "a6a9a8",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445555&productid=VWA-10"
  },
  {
    "title"  : "VWA-11",
    "colour" : "black",
    "code"   : "vwa11",
    "hex"    : "282320",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445554&productid=VWA-11"
  },
  {
    "title"  : "VWA-12",
    "colour" : "white",
    "code"   : "vwa12",
    "hex"    : "a7aca9",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445557&productid=VWA-12"
  },
  {
    "title"  : "VWA-13",
    "colour" : "pink",
    "code"   : "vwa13",
    "hex"    : "c73672",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445556&productid=VWA-13"
  },
  {
    "title"  : "VWA-14",
    "colour" : "turquise",
    "code"   : "vwa14",
    "hex"    : "49afb4",
    "url"    : "http://ideahouse.com.my/proddetail.asp?id=OCAT&pid=3F3E25445551&productid=VWA-14"
  }
  ];


//$('.feature-wrap').hide();
var browserHeight = $(window).innerHeight();


$('.logo').attr('fill', '#dd2d42');

$('a.watch').click(function () {

  $('.feature-wrap').show();
  var productChoice = $(this).data('id');

  console.log(browserHeight);

    // Which row to return to
    var productReturn = ($(this).attr("id"));

    // var heightnumber = $('#lightbox').css('height');
    // $('.lightbox-wrap').css('height', heightnumber);

    $('.spinner').show();

    $('#lightbox').hide();


    var productTitle = productArr[productChoice-1].title;
    var productCode = productArr[productChoice-1].code;
    var productHex = productArr[productChoice-1].hex;
    var productURL = productArr[productChoice-1].url;
    var productColour = productArr[productChoice-1].colour;
    var productReverse = productArr[productChoice-1].reverse;


    $('#lightbox').attr('src', "img/lightbox/"+productCode+".png");


    $('#lightbox').load(function(){
      console.log("loaded");
      $('#lightbox').fadeIn('700');
      $('.lightbox-wrap').css('height', 'auto');
      $('.spinner').hide();

    });


    $('.productColour').text(productColour);
    $('.productTitle').text(productTitle);
    $('h1').css('color', '#'+productHex);
    $('.logo').attr('fill', '#'+productHex);



    // $('#profile').css('background',

    //   '-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ffffff), color-stop(100%, #'+productHex+'))



    //   '

    //   );




      // radial-gradient(ellipse at center, #ffffff 0%, #'+productHex+' 100%);

      // -moz-radial-gradient(center, ellipse cover, #ffffff 0%, #'+productHex+' 100%);

      // -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ffffff), color-stop(100%, #'+productHex+'));

      // -webkit-radial-gradient(center, ellipse cover, #ffffff 0%, #'+productHex+' 100%);

      // radial-gradient(ellipse at center, #ffffff 0%, #'+productHex+' 100%);



    $('#profile').css('background', '#'+productHex);



    $('#profile').css('min-height', browserHeight);
    // $('#range').css('min-height', browserHeight);


    $('#back').attr('href', '#'+productReturn);


    // $('.clock').attr('fill', '#'+productHex);

  });



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({

          scrollTop: target.offset().top
        }, 400, 'easeInOutExpo');

        return false;

      }
    }
  });
});





});
