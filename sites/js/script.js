
// DOM Ready
$(function () {
	
	var idd = new Array();
	var oftop = new Array();
	var heightli= new Array();
	// Image Sources
	var images = new Array();
		images[0] = 'img/lilia.jpg';
		images[1]='img/itkhorasan.jpg';
		images[2]='img/iranmobile.jpg';
		images[3]='img/GBB1.jpg';
		images[4]='img/binasan.jpg';
		images[5]='img/karafarinan1.jpg';
		images[6]='img/iran2usa.jpg';
		images[7]='img/dayana.jpg';
		images[8] = 'img/guide4visa.jpg';
		images[9] = 'img/ghasr-agency.jpg';
		images[10] = 'img/pirouzco.jpg';
		images[11] = 'img/nadin.jpg';
		images[12] = 'img/dr-ebrahimzadeh.jpg';
		images[13] = 'img/iranservercom.jpg';
		images[14] = 'img/jahan-afroz.jpg';
		images[15] = 'img/tasvir-ara.jpg';
		images[16] = 'img/nikan-samaneh.jpg';
		images[17] = 'img/hamansaffron.jpg';
		images[18] = 'img/zanrooz.jpg';
		images[19] = 'img/parsa.jpg';
		images[20] = 'img/tabliq.jpg';
		images[21] = 'img/agri.jpg';
		images[22] = 'img/shayan.jpg';
		images[23] = 'img/4dos.jpg';





	var links = new Array();
		links[0] = 'http://www.liliadaroo.com';
		links[1] = 'http://it.khorasan.ir/';
		links[2] = 'http://iran-mobile.com/';
		links[3] = 'http://gbbco.com.tr/';
		links[4] = 'http://binasanairspring.com/';
		links[5] = 'http://karafarinan.com/';
		links[6] = 'http://iran2usa.com/';
		links[7] = 'http://dayanahashemi.com/';
		links[8] = 'http://guide4visa.com';
		links[9] = 'http://www.ghasragency.com';
		links[10] = 'http://pirouz.co';
		links[11] = 'http://www.applyeu.com';
		links[12] = 'http://drebrahimzadeh.com';
		links[13] = 'http://www.iranserver.com';
		links[14] = 'http://jahanafrooz.com';
		links[15] = 'http://www.tasvirara.com';
		links[16] = 'http://www.irannsa.com';
		links[17] = 'http://www.hamansaffron.com';
		links[18] = 'http://www.zanrooz.com';
		links[19] = 'http://parsajahedi.com';
		links[20] = 'http://www.tabliq.com';
		links[21] = 'http://agri-incubator.ir';
		links[22] = 'http://www.shayankar.com/';
		links[23] = 'http://4-dos.com/';


		
	// images length
	var max = $(images).length;
	// at least 1 image exist
	if(max>0)
	{
		// create the UL element
		var ul = $('<ul id="portfolio"></ul>');
		// append to div#wrapper
		$(ul).appendTo($('#wrapper'));
		// load the first image
		LoadImage(0,max);
	}

	// function of loading image
	// params: (int) index of image in array, (int) length of images array
	function LoadImage(index,max)
		{
			// if current index is lower then max element (max-1)
			if(index<max)
				{
					// create the LI, add loading class
					var list = $('<li class="section" id="portfolio_'+index+'" ></li>').addClass('loading');
					list.append('<p><a herf="#" target="_blank"> </a></p>');
					
					// append to UL
					$('ul#portfolio').append(list);
	
					// current LI
					var curr = $("ul#portfolio li#portfolio_"+index+" p a");
					// new image object
			        var img = new Image();
					// image onload
			        $(img).load(function () {
			            $(this).css('display','none'); // since .hide() failed in safari
			            $("ul#portfolio li#portfolio_"+index).removeClass('loading');
			            $(curr).append(this);
			            $(curr).attr('href',links[index]);
			            $(this).fadeIn('slow',function(){
								// once the current loaded, trigger the next image
								LoadImage(index+1,max);
							});
			        }).error(function () {
						// on error remove current
						$(curr).remove();
						// trigger the next image
						LoadImage(index+1,max);
			        }).attr('src', images[index]);
				}
				// array which store lis id ...................................
					var i=0;
						$("ul#portfolio li").each(function(eval){
							idd[i]=$(this).attr("id");
							oftop[i]=$(this).offset().top;
							heightli[i]=$(this).height();
        					i++;
							// console.log(idd,oftop,heightli);	
						});	
		}


// next and prev arrow scrolling ......................................
		// $('ul#portfolio li').live('load', function (){
		// 	$("ul#portfolio li").addClass("section");
		
		// })
		var lchiled=$("ul#portfolio li").last();
		var fchiled=$("ul#portfolio li").first();
		$('li.section').first();
		$("ul#portfolio li:first-child").addClass("current");

		$('a.display').on('click', function(e) {
    		e.preventDefault();

     		 var t = $(this).attr('name');

      		 that = $(this);


    	if (t === 'next') {
    		if($('.current').next('.section').length==0)
        	var $next = $('li.section').first();
    		else

        	var $next = $('.current').next('.section');

	        var top = $next.offset().top -65;
	        $('.current').removeClass('current');
	      
	        $('body,html').animate({
	          scrollTop: top,

	        }, 

	        function () {
	               $next.addClass('current');
	               // alert(top);
	        });
  	}
   		else if (t === 'prev' && $('.current').prev('li.section').length > 0) {
	        var $prev = $('.current').prev('.section');
	        var top = $prev.offset().top -65;
	        $('.current').removeClass('current');
	      
	        $('body,html').animate({
	          scrollTop: top,     
	        }, function () {
	            $prev.addClass('current');

	        });
  		} 

});


//.................when arrows disapear ...................................... 
var linkbox=$(".links");
	i=0;
	$window = $(window),
	 $window.scroll(function () {
        distance=linkbox.offset().top;
        var wdistance = $window.scrollTop();
        distance=distance-500;
        if (wdistance >= distance) {
        	$("div.navigation").addClass("disnone");
        }
        else{
        	$("div.navigation").removeClass("disnone");
        }
        // if (oftop[i] <= wdistance && wdistance <= oftop[i]+heightli[i]) {
        // 	$('.current').removeClass('current');
        // 	$(idd[i]).addClass('current');
        // 	console.log(oftop,idd,heightli);
        // };
      });
      

});
