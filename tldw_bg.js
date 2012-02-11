pub = {};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  if(request.msg == 'saveData') {
    pub.data = request.data;
    return;
  } else if(request.msg == 'loadData') {
    sendResponse(pub);
    return;
  }

  // We need to send a reponse, even if it's empty.
  sendResponse({msg: 'error', result: null, error: 'nothing called!'});
});
/*
$(document).ready(function(){
  var i, j, vids, vid, src, info;
  vids = $('#foo iframe').add('#foo embed');
  info = $('#info');
  for( i=0, j=0; i<vids.length; i++ )
  {
    vid = $(vids[i]);
    src = vid.attr('src');
    if( typeof src !== "undefined" )
    {
      info.append('<p>Video found: '+src+'</p>');
      j++;
    }
  }
  info.append('<p>Number of vids: '+j+'</p>');
});
// */
