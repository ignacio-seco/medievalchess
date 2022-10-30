/*function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }*/


class MedievalChess{
    constructor (){
        this.player1="player1"
        this.player1Army=[]
        this.player1ArmyPoints=0
        this.turnActivations=2
        this.playerActivationsLast=1
        this.player2="player2"
        this.player2Army=[]
        this.player2ArmyPoints=0
        this.gameArmyPoints=100
        this.activePlayer=""
    }
    setArmyPoints()
    {
        let armyPointsNumber//querySelector;
        if(armyPointsNumber>100)
        {
            if(armyPointsNumber<300)
            {
            this.gameArmyPoints=armyPointsNumber
            } 
            else this.gameArmyPoints=300 
        }
        else this.gameArmyPoints=100
    }
    setPlayerOneArmy(type)
    {
    let newCharacter = new type (this.player1);
    if(this.player1ArmyPoints+newCharacter.points<this.gameArmyPoints){
    this.player1Army.push(newCharacter);
    let newArmyPoints=0
    this.player1Army.forEach((element)=>newArmyPoints=newArmyPoints + element.points)
    this.player1ArmyPoints=newArmyPoints}
    else 
    {
        alert (`${this.player1},this unity cost too much for your army, try a cheaper one or end this fase`);
    return;
    }

    }
    setPlayerTwoArmy(type)
    {
    let newCharacter = new type (this.player2);
    if(this.player2ArmyPoints+newCharacter.points<this.gameArmyPoints){
    this.player2Army.push(newCharacter);
    let newArmyPoints=0
    this.player2Army.forEach((element)=>newArmyPoints=newArmyPoints + element.points)
    this.player2ArmyPoints=newArmyPoints}
    else 
    {
        alert (`${this.player2},this unity cost too much for your army, try a cheaper one or end this fase`);
    return;
    }

    }
    placePlayerOneArmy(){

    }
    PlacePlayerTwoArmy(){
        
    }
    setActivePlayer(){
        this.activePlayer=this.player1
    }

}



/*    const mage1 = new Mage('Ignacio')
    console.log(map)
    mage1.placeUnity()
    console.log(map)
    mage1.activateChar()
    console.log(map)
    console.log(activeCharMapPosition)
    activeCharMapPosition.moveDown()
    console.log(map)
    activeCharMapPosition.moveUp()
    console.log(map)
    activeCharMapPosition.moveRight()
    console.log(map)
    activeCharMapPosition.moveRight()
    console.log(map)*/