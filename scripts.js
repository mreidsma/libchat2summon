// Scripts to make the Libchat2summon magic work

var libchatHash, scriptCode, scriptUrl;

// Navigation between steps

// Set up section accordion
$('section').hide();
$('section:first').show();

// Hide the yes/no stuff

$('#testworked').hide();
$('#testfailed').hide();
$('#failed').hide();
$('#worked').hide();

$('.next').find('a').click(function(e) {

	e.preventDefault();

	var sectionNo = $(this).closest('section').attr('data-number');
	var nextSectionNo = parseInt(sectionNo) + 1;

	// Hide the parent section
	
	$("section[data-number='" + nextSectionNo + "']").slideDown(200);
	$(this).closest('section').slideUp(200);
});

$('#testcheck').find('.yes').click(function(e) {
	e.preventDefault();
	$('#testworked').slideDown(200);
});

$('#finalcheck').find('.no').click(function(e) {
	e.preventDefault();
	$('#failed').slideDown(200);

});

$('#finalcheck').find('.yes').click(function(e) {
	e.preventDefault();
	$('#worked').slideDown(200);

});



// Get the hash out of the LibChat widget code

document.getElementById('libchat_code').onpaste = function() {

	setTimeout(function() {
		var libchatCode = document.getElementById('libchat_code').value;
		console.log(libchatCode);
		var libchatBits = libchatCode.split('\"');
		console.log(libchatBits[1]);
		var libchatHashBits = libchatBits[1].split('_');
		libchatHash = libchatHashBits[1];

		var libchatHashList = document.createElement('li');
		libchatHashList.innerHTML = 'Your LibChat Hash is <b>' + libchatHash + '</b>';
		document.getElementById('step1_list').appendChild(libchatHashList);

		// Generate the JavaScript needed and populate the textarea once step 1 is complete

		scriptCode = "var chatStyles = '#libchat_" + libchatHash + " button {font-weight: bold; border: 1px solid #333 !important; font-size: 1em; padding: .5em 1em .5em 3em !important; position: relative; right: -4em; } #libchat_"+libchatHash +" button.libchat_online[style] {background-image: url(//mreidsma.github.io/libchat2summon/img/chat-online.png) !important; background-repeat: no-repeat; background-position: 15% 50%; } #libchat_"+libchatHash+" button.libchat_offline[style] {background-image: url(//mreidsma.github.io/libchat2summon/img/chat-offline.png) !important; background-repeat: no-repeat; background-position: 15% 50%; } @media screen and (min-width:1025px) {#libchat_"+libchatHash+" button {top: -2.7em; float: right; margin-right: 2%; right: 0; } } '; $('head').append('<style>' + chatStyles + '</style>'); console.log('Adding the chat styles!');setTimeout(function(){console.log('About to add the chat button...');var e=document.body.querySelector('.savedItemsFolderContainer'),t=document.createElement('div');t.id='libchat_"+libchatHash+"',e.appendChild(t)&&console.log('Added the chat container...');var a=document.createElement('script');a.type='text/javascript',a.src='//v2.libanswers.com/load_chat.php?hash="+libchatHash+"',document.body.appendChild(a)&&console.log('Successfully added the Springshare chat script!')},1500);";
		document.getElementById('libchat_code_text').value = scriptCode;

		var chatStyles = '#libchat_' + libchatHash + ' button {font-weight: bold; border: 1px solid #333 !important; font-size: 1em; padding: .5em 1em .5em 3em !important; position: relative; right: -4em; } #libchat_' + libchatHash + ' button.libchat_online[style] {background-image: url(//mreidsma.github.io/libchat2summon/img/chat-online.png) !important; background-repeat: no-repeat; background-position: 15% 50%; } #libchat_' + libchatHash + ' button.libchat_offline[style] {background-image: url(//mreidsma.github.io/libchat2summon/img/chat-offline.png) !important; background-repeat: no-repeat; background-position: 15% 50%; } @media screen and (min-width:1025px) {#libchat_' + libchatHash + ' button {top: -2.7em; float: right; margin-right: 2%; right: 0; } } '; $('head').append('<style>' + chatStyles + '</style>'); console.log('Adding the chat styles!');
	}, 100);

}

$('#step3').find('.next').find('a').click(function() {
		scriptUrl = document.getElementById('scripturl').value;
		document.getElementById('summonurl').value = scriptUrl;
		console.log(scriptUrl);
});

// Select all text when textboxes are focused on
$("textarea.copybox").focus(function() { $(this).select(); } );

$('.download').find('a').click(function(e) {
	e.preventDefault();
	download('libchat2summon.js', scriptCode);
});

// Add custom styles to page



function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}

