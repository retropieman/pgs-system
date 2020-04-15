
var _games = $.getJSON("games/games.json", function(data, status){
    if(status == 200){
      _mygames = JSON.parse(data);
      $( "#flags" ).append( "<div id='loaded'></div>" );
      
    }else{
      alert(status + ": There was an error loading your games.");
    }
});


$("#flags").on('ready', '#loaded', function(){
    mygames = _games.responseText;
    games = JSON.parse(mygames);

});
