$(document).ready(function() {
  chrome.extension.sendRequest({msg: 'loadData'}, function(response) {
    var i, data, url;
    data = response.data;
    for( i=0; i<data.length; i++ )
    {
      url = 'http://tldw.services.refreshoxford.co.uk:8080/tldwapi/search?url='+encodeURIComponent(data[i]);
      jQuery.getJSON(url, function(transcript) {
        //alert('Title = '+transcript.title);
        //alert('Title = '+transcript.link);
        $('body').append('<div>Title = '+transcript.title+'</div>')
        $('body').append('<div>Link = '+transcript.link+'</div>')
      });
      break;
    }
  });
})
