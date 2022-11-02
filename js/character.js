class Character{
    constructor(job,health,attackTurn,attack,charMovment,range,points,playerId,playerName,mainImage,idle,atkMov,death)
    {
        this.job=job
        this.health=health
        this.attackTurn=attackTurn
        this.attackMade=attackTurn
        this.attack=attack
        this.charMovment=charMovment
        this.movment=charMovment
        this.range=range
        this.points=points
        this.positionX=-1
        this.positionY=-1
        this.playerId=playerId
        this.playername=playerName
        this.activated=false
        this.mainImage=mainImage
        this.idle=idle
        this.atkMov=atkMov
        this.death=death
                    
    }
    endUnitActivation()
{
    this.attackMade=0
    this.movment=0
    this.activated=true
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    activeChar=""
    turnMenu.classList.remove("hide");
    activationMenu.classList.add("hide");
}    
    moveRight(){if(this.movment>0)
        {
            if((this.positionY+1<map[this.positionX].length)&&(map[this.positionX][this.positionY+1]=="-"))
    {
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionY++;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.mainImage
this.movment--
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveLeft(){if(this.movment>0){if((this.positionY-1>-1)&&(map[this.positionX][this.positionY-1]=="-")){
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionY--;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.mainImage
this.movment--
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveUp(){if(this.movment>0){if((this.positionX-1>-1)&&(map[this.positionX-1][this.positionY]=="-")){
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionX--;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.mainImage
this.movment--
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveDown(){if(this.movment>0){if((this.positionX+1<map.length)&&(map[this.positionX+1][this.positionY]=="-"))
{
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionX++;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.mainImage
this.movment--
console.log(activeChar===this)
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}

makeAnAttack(tr){    
    if (this.range>=tr)
    {(map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
        this.attackMade--;    
if((this.movment=0)&&(this.attackMade=0)){this.endUnitActivation()}}
else alert(`you can't attack there`)
}
returnDamage(tr){
    if(this.range>=tr){
        activeChar.health=activeChar.health-(this.attack / 2);
        if(activeChar.health<1){
        let boardSpace=`#b${activeChar.positionX}${activeChar.positionY}`
        document.querySelector(boardSpace).classList.remove("charSelected")
        activeChar.die();
        activeChar=""
        turnMenu.classList.remove("hide");
        activationMenu.classList.add("hide");

    }
    else return;
}
}
gameEndTest(){
    let looserPlayerName = document.querySelector(`#looserPlayerName`)
   let p1units=0 //contador de unidades no mapa de cada jogador
    let p2units=0 //idem
    for(let n=0;n<map.length;n++){
        for(let k=0;k<map[n].length;k++){
            if(typeof map[n][k]==="object"){
                if(map[n][k].playerId==="player1"){
                    p1units++
                }
                else p2units++
            }
        }
    }
    {
     if (p1units===0||p2units===0){
        page8.classList.add("hide");
        page9.classList.remove("hide");
        looserPlayerName.textContent=this.playerName
     }
     
    }
}
die() {
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).src=""
    map[this.positionX][this.positionY]="-"
    this.gameEndTest()
    
}
receiveDamage(tr){
    this.health=this.health-(activeChar.attack);
    if(this.health>0){
    this.returnDamage(tr)
    }
    else this.die()
}

}



class Mage extends Character{
    constructor(playerId,playerName){
        super(`Mage`,50,1,30,1,3,15)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/Mage/mage.png";
    this.idle=[
        "./img/spritestouse/Mage/Idle/idle1.png",
        "./img/spritestouse/Mage/Idle/idle2.png",
        "./img/spritestouse/Mage/Idle/idle3.png",
        "./img/spritestouse/Mage/Idle/idle4.png",
        "./img/spritestouse/Mage/Idle/idle5.png",
        "./img/spritestouse/Mage/Idle/idle6.png",
        "./img/spritestouse/Mage/Idle/idle7.png",
        "./img/spritestouse/Mage/Idle/idle8.png",
        "./img/spritestouse/Mage/Idle/idle9.png",
        "./img/spritestouse/Mage/Idle/idle10.png",
        "./img/spritestouse/Mage/Idle/idle11.png",
        "./img/spritestouse/Mage/Idle/idle12.png",
        "./img/spritestouse/Mage/Idle/idle13.png",
        "./img/spritestouse/Mage/Idle/idle14.png"
    ];
    this.atkMov=
    [
    "./img/spritestouse/Mage/Attack/attack1.png",
    "./img/spritestouse/Mage/Attack/attack2.png",
    "./img/spritestouse/Mage/Attack/attack3.png",
    "./img/spritestouse/Mage/Attack/attack4.png",
    "./img/spritestouse/Mage/Attack/attack5.png",
    "./img/spritestouse/Mage/Attack/attack6.png",
    "./img/spritestouse/Mage/Attack/attack7.png",
    ];
    this.death=
    [
    "./img/spritestouse/Mage/Death/death1.png",
    "./img/spritestouse/Mage/Death/death2.png",
    "./img/spritestouse/Mage/Death/death3.png",
    "./img/spritestouse/Mage/Death/death4.png",
    "./img/spritestouse/Mage/Death/death5.png",
    "./img/spritestouse/Mage/Death/death6.png",
    "./img/spritestouse/Mage/Death/death7.png",
    "./img/spritestouse/Mage/Death/death8.png",
    "./img/spritestouse/Mage/Death/death9.png",
    "./img/spritestouse/Mage/Death/death10.png"
    ];
        
    }

}