 $(document).ready(function(){
    $('.tooltipped').tooltip();
	$('.collapsible').collapsible();
	$('.materialboxed').materialbox();
	$('.modal').modal();
	$('.tabs').tabs({
		swipeable:true 
	});
	$('select').formSelect();
	$('.carousel-rev').carousel({
		dist:0,
		numVisible: 4,
		indicators: true,
		shift:30,
		padding:30

	});









	$('.carousel-serv').carousel({
		dist:0,
		numVisible: 4,
		indicators: true,
		shift:0,
		padding:38

	});
	 $('.carousel.head-banner').carousel({
		fullWidth: true
	});
    setInterval(function() {
		$('.carousel.head-banner').carousel('next');
	 }, 10000);  
	$('.carousel-part').carousel({
		dist:0,
		numVisible: 5,
		shift:0,
		padding:50
	});
	$('.carousel-list').carousel({
		dist:0,
		numVisible: 3,
		shift:0,
		padding:50
	});

	$('.carousel-video').carousel({
		dist:0,
		padding:150,
		
		indicators: false,
		//fullWidth: true,
shift:0
	});

$('.moveNextCarouselV').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel-video').carousel('next');
	});
	$('.movePrevCarousel').click(function(e){
		 e.preventDefault();
		 e.stopPropagation();
		 $('.carousel-video').carousel('prev');
	});



	$('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel-part').carousel('next');
	});
	$('.movePrevCarousel').click(function(e){
		 e.preventDefault();
		 e.stopPropagation();
		 $('.carousel-part').carousel('prev');
	});
   
	$( ".basket" ).hover(function(){
	    $( ".dropdown" ).slideToggle(200); 
	});
	$( ".users-acc" ).hover(function(){
	    $( "#user-menu" ).slideToggle(200); 
	});
	$( ".region" ).click(function(){
	    $( ".region ul" ).slideToggle(200); 
	 });

   
  });



        
		




 

        
if(document.querySelector('.player-with-download')){
	GreenAudioPlayer.init({
                selector: '.player-with-download',
                stopOthersOnPlay: true,
                showDownloadButton: true,
                enableKeystrokes: true
            });

}
