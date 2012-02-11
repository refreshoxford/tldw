var Background = (function($) {
  
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {file:"tldw_getvid.js"});
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  if(request.msg == 'add_torrent_from_url') {
    Background.addTorrentFromUrl(request, sender, sendResponse);
    return;
  } else if(request.msg == 'enable_download_icon') {
    sendResponse(localStorage.delugeDownloadIcon);
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