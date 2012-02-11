$(document).ready(function() {
  chrome.extension.sendRequest({msg: 'loadData'}, function(response) {
    $('body').append('<div>'+response.data+'</div>')
  });
})