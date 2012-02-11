$(document).ready(function() {
  chrome.extension.sendRequest({msg: 'loadData'}, function(response) {
    $('body').append('<div>foo: '+response.data+'</div>')
  });
})
