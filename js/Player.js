class Player {
  //this -> player
  constructor(){
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance,
  });
  }

  //Static functions are those common functions which are called by the class themselves rather than by
  //objects of the class. player is object, Player is class
  static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
