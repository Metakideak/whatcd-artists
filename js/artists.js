  function addArtists(text) {
    var artists = text.split(',');
    // for each artist, append html to table row
    for (var i = 0; i < artists.length; i++) {
      artist = artists[i];
      console.log("Adding artist: " + artist);

      if(i == 0) {
        $('#artist').val(artist);
      } else {
        $('#artistfields').append("<br>");
        $('#artistfields').append('<input type="text" id="artist_' + (i + 1) + '" name="artists[]" size="45" value="' + artist + '">');
        $('#artistfields').append('<select id="importance" name="importance[]"><option value="1">Main</option><option value="2">Guest</option><option value="4">Composer	</option><option value="5">Conductor</option><option value="6">DJ / Compiler</option><option value="3">Remixer</option><option value="7">Producer</option></select>');
      }
    }
  }