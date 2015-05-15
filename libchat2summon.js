
// To customize this script, add your Chat widget hash between the single quotes in the line below. (See README for help):
var chatHash = '6290b3d40228a9e708fa7066d01f56bf';

// We also need to load some custom styles that will help make the button display properly
var chatStyles = document.createElement('link');
chatStyles.rel = 'stylesheet';
chatStyles.type = 'text/css';
chatStyles.href = '//gvsuliblabs.com/labs/summon2.0/summon2.css';
if(document.head.appendChild(chatStyles)) {
    console.log('Adding the custom chat styles...');
}

// Since Summon loads this customization script as the page is being drawn, I'm adding a short delay to make sure that all of
// the interface elements are ready to be modified

setTimeout(function() {
  
    console.log('About to add the chat button...');
  
    var chatContainer = document.body.querySelector(".savedItemsFolderContainer");
    var chatDiv = document.createElement('div');
    chatDiv.id = chatHash;
    if(chatContainer.appendChild(chatDiv)) {
      console.log('Added the chat container...');
    }
  
    // Now let's create the script element that will load the LibChat script
    var chatScript = document.createElement('script');
	  chatScript.type = 'text/javascript';
	  chatScript.src = '//v2.libanswers.com/load_chat.php?hash=' + chatHash;
	  if(document.body.appendChild(chatScript)) {
	    console.log('Successfully added the Springshare chat script!');
	  }
	  
	  // Delay is 1000 milliseconds (1 second). You can try different delays to get the one you like.
	  
}, 1000);