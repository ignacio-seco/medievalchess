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
        this.activePlayer="-"
    }

    startMatch(){
        this.activePlayer=this.player1
        document.querySelector(`#playerTurn`).textContent=this.activePlayer
    }    
}