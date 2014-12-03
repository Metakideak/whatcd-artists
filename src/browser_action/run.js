$('.run').click(function() {
  var text = $('.artist-input').val();
  chrome.tabs.executeScript(null, { file: "/js/jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "/js/artists.js" }, function() {
      chrome.tabs.executeScript(null, { code: "addArtists(\"" + text + "\");" });
    });
  });
  // Close the browser action popup
  window.close();
});