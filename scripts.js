// Scripts to make the Libchat2summon magic work

// Navigation between steps


// Get the hash out of the LibChat widget code

document.getElementById('libchat_code').onpaste= function() {

	setTimeout(function() {
		var libchatCode = document.getElementById('libchat_code').value;
		console.log(libchatCode);
		var libchatBits = libchatCode.split('\"');
		console.log(libchatBits[1]);
		var libchatHashBits = libchatBits[1].split('_');
		var libchatHash = libchatHashBits[1];

		var libchatHashList = document.createElement('li');
		libchatHashList.innerHTML = 'Your LibChat Hash is <b>' + libchatHash + '</b>';
		document.getElementById('step1_list').appendChild(libchatHashList);
	}, 100);

}