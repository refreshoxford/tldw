$(document).ready(function(){
  var i, j, vids, vid, info;
  src = new Array();
  vids = $('iframe').add('embed');
  //info = $('#info');
  for( i=0, j=0; i<vids.length; i++ )
  {
    vid = $(vids[i]);
    if( typeof vid.attr('src') !== "undefined" )
    {
      //info.append('<p>Video found: '+src+'</p>');
      src[j] = vid.attr('src');
      //alert(src[j]);
      j++;
    }
  }
  
chrome.extension.sendRequest({msg: 'saveData', data: src}, function(response) {
  //
});
  
  //info.append('<p>Number of vids: '+j+'</p>');
});