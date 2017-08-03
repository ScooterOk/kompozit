jQuery(function() {
    jQuery( "#header-right-menu" ).hover(function() {
        clearTimeout(jQuery.data(this,'timer'));
        jQuery('#header-right-menu-container',this).stop(true,true).slideDown(250);
    }, function () {
        jQuery.data(this,'timer', setTimeout(jQuery.proxy(function() {
            jQuery('#header-right-menu-container',this).stop(true,true).slideUp(100);
        }, this), 100));
    });
});

$(document).click(function(e){
  var t = e.target;  
  if(!$(t).closest('.select').length){
  	$('.select-options').slideUp(100);
  }
  if(!$(t).closest('#volume-calculator').length){
  	$('#volume-calculator').fadeOut(100);
  }
  
});

$('#photo-slider .slider-screen').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#photo-slider .slider-nav',
  infinite: false
});
$('#photo-slider .slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#photo-slider .slider-screen',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  infinite: false
});
$('#color-preview').hover(
  function(e){
    $(this).find('.color-preview').fadeIn(150);
  },
  function(e){
    $(this).find('.color-preview').fadeOut(150);
  }
)
$('.alsobuy-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4
});
$('#tabs-select li').click(function(e){
    var target = $(this).attr('data-target');
    $('#tabs-select li').removeClass('current');
    $(this).addClass('current');
    $('#tabs-content li').removeClass('current');
    $('#tabs-content').find('.'+target).addClass('current');
    console.log(target);
})


/*================================================================/
                    Selects Initialization
=================================================================*/
var colorSelect;
var volumeSelect;
$('#color-select').click(function(e){
  if($(this).find('.select-options').is(':hidden')){
    $(this).find('.select-options').slideDown(50, function(){      
      colorSelect = colorSelect || new IScroll('#color-options', {mouseWheel: true, scrollbars: true, fadeScrollbars : true});
      colorSelect.scrollTo(0, 0);
    });
  }else{
    $(this).find('.select-options').slideUp(50);
  }
});
$('#color-select .options li').click(function(e){
  var val = $(this).attr('data-value');
  var color = $(this).attr('data-color');
  $('#color-options li').removeClass('current');
  $(this).addClass('current');
  $(this).closest('.select').find('.value').html(val);
  $(this).closest('.select').find('#color-preview').css('backgroundColor', '#'+color);
  console.log(val);
});
$('#volume-select').click(function(e){
  if($(this).find('.select-options').is(':hidden')){
    $(this).find('.select-options').slideDown(50, function(){      
      volumeSelect = volumeSelect || new IScroll('#color-options', {mouseWheel: true, scrollbars: true, fadeScrollbars : true});
      volumeSelect.scrollTo(0, 0);
    });
  }else{
    $(this).find('.select-options').slideUp(50);
  }
});
$('#volume-select .options li').click(function(e){
  var val = $(this).attr('data-value') + ' кг';  
  $('#volume-options li').removeClass('current');
  $(this).addClass('current');
  $(this).closest('.select').find('.value').html(val);    
});
var amountVal;
$('#amount-select input').focus(function(e){
  amountVal = $(this).val();
  console.log(amountVal);
  $(this).val('');
});
$('#amount-select input').blur(function(e){
  if($(this).val()){
    amountVal = $(this).val();
  }
  $(this).val(amountVal);
});
$('#amount-select i').click(function(e){
  var val = Number($('#amount-select input').val());
  if($(this).hasClass('plus')){
    val++;
  }else{
    if(val > 1)val--;
  }
  $('#amount-select input').val(val);
});

/*================================================================/
                    Calc Initialization
=================================================================*/
$('#calc-on').click(function(e){
	if($('#volume-calculator').is(':hidden')){
		$('#volume-calculator').fadeIn(100);
	}
	return false;
})
$('#volume-calculator .close').click(function(event) {
	$('#volume-calculator').fadeOut(100);
});
var mode = (window.opera) ? ((document.compatMode == "CSS1Compat") ? $('html') : $('body')) : $('html,body');
$('#learn-more').click(function(e){
	var t = $('#tabs-select').offset().top;	
	$('#tabs-select li[data-target="description"]').click();
    mode.animate({scrollTop:t-90},300);
    return false;
});