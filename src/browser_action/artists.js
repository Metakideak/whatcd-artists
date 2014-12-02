console.log("test");
$( '.run' ).click(function() {
  var text = $('.artist-input').val();
  // split by comma
  // for each artist, append html to table row
  // swag
});

// Taken from what.cd's browse.js (Line 192)
function AddArtistField() {
	var ArtistFieldCount = document.getElementById("AddArtists").getElementsByTagName("input").length;
	var x = document.getElementById('AddArtists');
	x.appendChild(document.createElement("br"));
	var ArtistField = document.createElement("input");
	ArtistField.type = "text";
	ArtistField.name = "aliasname[]";
	ArtistField.size = "17";
	x.appendChild(ArtistField);
	x.appendChild(document.createTextNode(' '));
	var Importance = document.createElement("select");
	Importance.name = "importance[]";
	Importance.innerHTML = '<option value="1">Main</option><option value="2">Guest</option><option value="4">Composer</option><option value="5">Conductor</option><option value="6">DJ / Compiler</option><option value="3">Remixer</option><option value="7">Producer</option>';
	x.appendChild(Importance);
	ArtistFieldCount++; 
}