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

    startMatch(){
        this.activePlayer=this.player1
    }
    
    endTurn(){
        let boardSpace=`#b${activeChar.PositionX}${activeChar.PositionY}`
            document.querySelector(boardSpace).classList.remove("charSelected");
            this.playerActivationsLast=this.turnActivations
        if(this.activePlayer===this.player1){
        this.player1Army.forEach((element)=>{
            element.movment=element.charMovment;
            element.attackMade=element.attackTurn;
            element.activated=false
            this.activePlayer=this.player2
        })    
        }
        else this.player2Army.forEach((element)=>{
            element.movment=element.charMovment;
            element.attackMade=element.attackTurn;
            element.activated=false
            this.activePlayer=this.player1
    })
}
    activateChar(){
        if(Number(this.playerActivationsLast) > 0){ 
            if(map[targetSpaceX][targetSpaceY]!=="-")
            {
        if((map[targetSpaceX][targetSpaceY]).player==this.activePlayer){
            if((map[targetSpaceX][targetSpaceY]).activated)
            {
                alert (`This unit has already been activated this turn`);
            return;
            }
            else activeChar=map[targetSpaceX][targetSpaceY];
            this.playerActivationsLast--;
            let boardSpace=`#b${activeChar.PositionX}${activeChar.PositionY}`;
            document.querySelector(boardSpace).classList.add("charSelected")
            turnMenu.classList.add("hide");
            activationMenu.classList.remove("hide");
        }
        alert (`Don't try to mind controller other people! You can't activate another player unit!`);
            return;
    } 
    alert (`Do you also see dead people??? This is an empty space!!`)
}
alert (`you already activated all the units you can this turn. Please, be a good competitor and let your friend also play... we will end your turn!`)
this.endTurn
}

}