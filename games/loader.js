var games;
$.getJson("games/games.json", function(data, status){
    if(status == 200){
      games = JSON.parse(data);
    }else{
      alert(status + ": There was an error loading your games.");
    }
});

