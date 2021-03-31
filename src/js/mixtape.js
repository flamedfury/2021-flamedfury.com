var audio;

//hide pause initially
$('#pause').hide();
	
//initializer - plays first song
initAudio($('#playlist li:first-child'));
	
function initAudio(element){
	var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

	//Create a New Audio Object
	audio = new Audio('media/' + song);
	
	if(!audio.currentTime){
		$('#duration').html('0:00');
	}

	$('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);
	
	//insert mixtape cover image
	$('img.cover').attr('src','../img/mixtape/covers/' + cover);
	
	$('#playlist li').removeClass('active');
    element.addClass('active');
}


//play button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//pause button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});

//next button
$('#next').click(function(){
    audio.pause();
    var next = $('#playlist li.active').next();
    $('#playlist li.active').removeClass('active');
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
	audio.play();
	showDuration();
    if($('#play').is(':visible')){
        $('#play').hide();
        $('#pause').show();
    }
});

//prev button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
    $('#playlist li.active').removeClass('active')
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
	audio.play();
	showDuration();
    if($('#play').is(':visible')){
        $('#play').hide();
        $('#pause').show();
    }
});

//allow playlist items to be clicked
$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//volume control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});
	
//time duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + ':' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
		if( audio.currentTime >= audio.duration) $('#next').trigger('click');
	});

//fast forward
$("#progressbar").mouseup(function (e) {
	var leftOffset = e.pageX - $(this).offset().left;
	var songPercents = leftOffset / $('#progressbar').width();
	audio.currentTime = parseFloat(songPercents * audio.duration);
   });
}