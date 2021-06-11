class Game {
  //this->game
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  //when all the 4 players log in, gamestate becomes 1
  play(){
    form.hide();
    textSize(30);
    text("game start", 120 , 100);

    Player.getPlayerInfo();

    //allPlayers will be stored as
    //player1: {name:"Arush", distance:0}
    //player2: {name""Anvi", distance: 0}
    if(allPlayers !== undefined){ //there is data inside the allPlayers variable
      var y = 130;
      for(var plr in allPlayers){ //plr=>player1,player2,player3,player4
        if(plr === "player" + player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, y);
        y = y + 20
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50;
      player.update();
    }
  }
}
