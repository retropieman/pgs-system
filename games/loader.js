
var _games = $.getJSON("games/games.json", function(data, status){
    if(status == 200){
      _mygames = JSON.parse(data);
    }else{
      alert(status + ": There was an error loading your games.");
    }
});
mygames = _games.responseText;
games = JSON.parse(mygames);


