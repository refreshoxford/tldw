// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code:"document.body.style.background='red !important'"});
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