$(document).ready(function(){
  var i, j, vids, vid, info;
  src = new Array(window.location.href);
  vids = $('iframe, embed, object');
  for( i=0, j=1; i<vids.length; i++ )
  {
    vid = $(vids[i]);
    if( typeof vid.attr('src') !== "undefined" )
    {
      src[j] = vid.attr('src');
      j++;
    }
    if( typeof vid.attr('data') !== "undefined" )
    {
      src[j] = vid.attr('data');
      j++;
    }
  }
  chrome.extension.sendRequest({msg: 'saveData', data: src}, function(response) {});
});
