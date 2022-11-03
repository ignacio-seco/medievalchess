class Unit{
    constructor(job,maxHealth,attackTurn,attack,charMovment,range,points,playerId,playerName,mainImage,idle,atkMov,hurt,death)
    {
        this.job=job
        this.maxHealth=maxHealth
        this.health=maxHealth
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
        this.playerName=playerName
        this.activated=false
        this.mainImage=mainImage
        this.idle=idle
        this.atkMov=atkMov
        this.hurt=hurt
        this.death=death
                    
    }
activateIdle(){
    let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(attackerBoardSpace).src=this.idle;

}
returnToMain(){
    let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(attackerBoardSpace).src=this.mainImage;

}
endUnitActivation()
{ if(this.playerId==="player1"){if(p1unitsCounter>1){
    this.attackMade=0
    this.movment=0
    this.activated=true
    this.returnToMain()
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    activeChar="-"
    turnMenu.classList.remove("hide");
    activationMenu.classList.add("hide");
    activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
    else{
        this.attackMade=this.attackTurn
        this.movment=this.charMovment
        this.activated=false//para que possa ser reativado
        this.returnToMain()
        let boardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(boardSpace).classList.remove("charSelected")
        activeChar="-"
        turnMenu.classList.remove("hide");
        activationMenu.classList.add("hide");
        activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}}
        else if(p2unitsCounter>1){
            this.attackMade=0
            this.movment=0
            this.activated=true
            this.returnToMain()
            let boardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(boardSpace).classList.remove("charSelected")
            activeChar="-"
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
            else{
                this.attackMade=this.attackTurn
                this.movment=this.charMovment
                this.activated=false//para que possa ser reativado
                this.returnToMain()
                let boardSpace=`#b${this.positionX}${this.positionY}`
                document.querySelector(boardSpace).classList.remove("charSelected")
                activeChar="-"
                turnMenu.classList.remove("hide");
                activationMenu.classList.add("hide");
                activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}
}    
moveRight(){
    if(this.movment>0)
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
let newBoardSpace=`#b${this.positionX}${this.positionY}`;
    document.querySelector(newBoardSpace).classList.add("charSelected");
    document.querySelector(newBoardSpace).src=this.idle;
this.movment--;
selectedInformation(activeCharInformation,activeChar);
selectedInformation(selectedSpaceInformation,map[targetSpaceX][targetSpaceY]);
if((this.movment===0)&&(this.attackMade===0))
{
    this.endUnitActivation()
}
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveLeft(){
    if(this.movment>0){if((this.positionY-1>-1)&&(map[this.positionX][this.positionY-1]=="-")){
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionY--;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.idle;
this.movment--
selectedInformation(activeCharInformation,activeChar)
selectedInformation(selectedSpaceInformation,map[targetSpaceX][targetSpaceY]);
if((this.movment===0)&&(this.attackMade===0))
{
    this.endUnitActivation()
}
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveUp(){
    if(this.movment>0){if((this.positionX-1>-1)&&(map[this.positionX-1][this.positionY]=="-")){
    map[this.positionX][this.positionY]="-";
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    document.querySelector(boardSpace).src=""
    this.positionX--;    
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
let newBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(newBoardSpace).classList.add("charSelected")
    document.querySelector(newBoardSpace).src=this.idle;
this.movment--
selectedInformation(activeCharInformation,activeChar)
selectedInformation(selectedSpaceInformation,map[targetSpaceX][targetSpaceY]);
if((this.movment===0)&&(this.attackMade===0))
{
    this.endUnitActivation()
}
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
moveDown(){
    if(this.movment>0){if((this.positionX+1<map.length)&&(map[this.positionX+1][this.positionY]=="-"))
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
    document.querySelector(newBoardSpace).src=this.idle;
this.movment--
selectedInformation(activeCharInformation,activeChar)
selectedInformation(selectedSpaceInformation,map[targetSpaceX][targetSpaceY]);
if((this.movment===0)&&(this.attackMade===0))
{
    this.endUnitActivation()
}
}
else alert(`you can't do this movment`); 
return; 
        }
else alert(`there is no movement left for this unit`); 
return;
}
makeAnAttack(tr){ 
    if(this.attackMade>0)
    {
        if(map[targetSpaceX][targetSpaceY]!=="-") 
        {
        if(!(this.playerName === map[targetSpaceX][targetSpaceY].playerName)){
    if (this.range>=tr){
        let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(attackerBoardSpace).src=this.atkMov;
        attacker = this;
        console.log(attacker)
    setTimeout(()=>{
        let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
            document.querySelector(newattackerBoardSpace).src=attacker.idle;
            (map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
            attacker.attackMade--;
            selectedInformation(activeCharInformation,activeChar);
    setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
    {
        attacker.endUnitActivation()
    }},4800);    
    },1500);        
}
else {alert(`you can't attack there`)}
    }
else {alert(`Don't try to be a traitor and kill your friends!`)}
}
else {alert(`Are you see seeing someone there??`)}
    } 
else {alert(`This unit has no attacks left for this turn`)}
}
returnDamage(tr){
    console.log(attacker)
    if(this.range>=tr){
        let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(hurtedBoardSpace).src=this.atkMov;
        let hurted=this
        setTimeout(()=>{
        document.querySelector(hurtedBoardSpace).src=hurted.mainImage;
        console.log(attacker)
        attacker.health=attacker.health-(hurted.attack/2);
        selectedInformation(activeCharInformation,activeChar);
        let attackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`;
        document.querySelector(attackerBoardSpace).src=attacker.hurt;
        if(attacker.health<1){        
        setTimeout(()=>{
        let boardSpace=`#b${attacker.positionX}${attacker.positionY}`;
        document.querySelector(boardSpace).classList.remove("charSelected");
        attacker.die();
        attacker="-"
        activeChar="-";
        turnMenu.classList.remove("hide");
        activationMenu.classList.add("hide");
        },1500)
        }
        else 
        {
        setTimeout(()=>
        {
            let attackerBoardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
            document.querySelector(attackerBoardSpace).src=activeChar.idle;
        },1500)
        }
    
    },1500)    
    }
    else {let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(hurtedBoardSpace).src=this.mainImage;}
}
gameEndTest(){
    let looserPlayerName = document.querySelector(`#looserPlayerName`)
   p1unitsCounter=0 //contador de unidades no mapa de cada jogador
    p2unitsCounter=0 //idem
    for(let n=0;n<map.length;n++){
        for(let k=0;k<map[n].length;k++){
            if(typeof map[n][k]==="object"){
                if(map[n][k].playerId==="player1"){
                    p1unitsCounter++
                }
                else p2unitsCounter++
            }
        }
    }
    {
     if (p1unitsCounter===0||p2unitsCounter===0){
        page8.classList.add("hide");
        page9.classList.remove("hide");
        looserPlayerName.textContent=this.playerName
     }
     
    }
}
die() {
    let dying=this;
    this.movment++//isso impede que a desativação da unidade seja ativada pelo attack, o que causava uma imagem de idle aparecer no quadrado da unidade morta
    map[dying.positionX][dying.positionY]="-"
    let BoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(BoardSpace).src=this.death;
    setTimeout(()=>
    {
    let boardSpace=`#b${dying.positionX}${dying.positionY}`;
    document.querySelector(boardSpace).src="";
    selectedInformation(activeCharInformation,activeChar);
selectedInformation(selectedSpaceInformation,map[targetSpaceX][targetSpaceY]);
    this.gameEndTest()
},1500)
    
    
}
receiveDamage(tr){
    let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(hurtedBoardSpace).src=this.hurt;
    let hurted=this
    this.health=this.health-(activeChar.attack);
    setTimeout(()=>{
        if(hurted.health>0){     
            hurted.returnDamage(tr)
            selectedInformation(selectedSpaceInformation,targetSpaceMap);
            }
            else hurted.die()
    },1500)
    
}
heal(){
    let healedBoardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(healedBoardSpace).src=this.idle;
    let healed=this;
    if(this.health+25>this.maxHealth){
        this.health=this.maxHealth
    }
    else {this.health=this.health+25};
    setTimeout(()=>{
        selectedInformation(selectedSpaceInformation,targetSpaceMap);
        document.querySelector(healedBoardSpace).src=healed.mainImage;
    },1500) 
}
}



class Mage extends Unit{
    constructor(playerId,playerName){
        super(`Mage`,50,1,30,1,3,20)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/Mage/mainImage.png";
    this.idle="./img/spritestouse/Mage/idle.gif";
    this.atkMov="./img/spritestouse/Mage/attack.gif";
    this.death="./img/spritestouse/Mage/death.gif";
    this.hurt="./img/spritestouse/Mage/hurt.gif"        
    }
    makeAnAttack(tr){ 
        if(this.attackMade>0)
        {
            if(map[targetSpaceX][targetSpaceY]!=="-") 
            { if (this.range>=tr){
            if(!(this.playerName === map[targetSpaceX][targetSpaceY].playerName)){
            let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
            console.log(attacker)
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
                attacker.attackMade--;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);        
    }
    else {//função de cura
        let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
            console.log(attacker)
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).heal();
                attacker.attackMade--;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);
        

}
        }
    else { alert(`you can't make your action there`)
        
    }
    }
    else {alert(`Are you see seeing someone there??`)}
        } 
    else {alert(`This unit has no attacks left for this turn`)}
    }    
}
class Jinn extends Unit{
    constructor(playerId,playerName){
        super(`Jinn`,50,1,30,1,3,20)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/jinn_animation/mainImage.png";
    this.idle="./img/spritestouse/jinn_animation/idle.gif";
    this.atkMov="./img/spritestouse/jinn_animation/attack.gif";
    this.death="./img/spritestouse/jinn_animation/death.gif";
    this.hurt="./img/spritestouse/jinn_animation/hurt.gif"        
    }
    makeAnAttack(tr){ 
        if(this.attackMade>0)
        {
            if(map[targetSpaceX][targetSpaceY]!=="-") 
            { if (this.range>=tr){
            if(!(this.playerName === map[targetSpaceX][targetSpaceY].playerName)){
            let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
            console.log(attacker)
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
                attacker.attackMade--;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);        
    }
    else {//função de cura
        let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
            console.log(attacker)
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).heal();
                attacker.attackMade--;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);
        

}
        }
    else { alert(`you can't make your action there`)
        
    }
    }
    else {alert(`Are you see seeing someone there??`)}
        } 
    else {alert(`This unit has no attacks left for this turn`)}
    }      
}

class Knight extends Unit{
    constructor(playerId,playerName){
        super(`Knight`,100,1,52,1,1,20)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/Knight/mainImage.png";
    this.idle="./img/spritestouse/Knight/idle.gif";
    this.atkMov="./img/spritestouse/Knight/attack.gif";
    this.death="./img/spritestouse/Knight/death.gif";
    this.hurt="./img/spritestouse/Knight/hurt.gif"        
    }
    returnDamage(tr){
        console.log(attacker)
        if(this.range>=tr){
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(hurtedBoardSpace).src=this.atkMov;
            let hurted=this
            setTimeout(()=>{
            document.querySelector(hurtedBoardSpace).src=hurted.mainImage;
            console.log(attacker)
            attacker.health=attacker.health-(hurted.attack/2);
            selectedInformation(activeCharInformation,activeChar);
            let attackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(attackerBoardSpace).src=attacker.hurt;
            if(attacker.health<1){        
            setTimeout(()=>{
            let boardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(boardSpace).classList.remove("charSelected");
            attacker.die();
            attacker="-"
            activeChar="-";
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            },1500)
            }
            else 
            {
            setTimeout(()=>
            {
                let attackerBoardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
                document.querySelector(attackerBoardSpace).src=activeChar.idle;
            },1500)
            }
        
        },1500)    
        }
        else { this.movment=2
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(hurtedBoardSpace).src=this.mainImage;}
    }
    endUnitActivation()
{ if(this.movment>0){if(this.health+12>this.maxHealth){
    this.health=this.maxHealth
}
else {this.health=this.health+12}
};
    if(this.playerId==="player1"){if(p1unitsCounter>1){
    this.attackMade=0
    this.movment=0
    this.activated=true
    this.returnToMain()
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    activeChar="-"
    turnMenu.classList.remove("hide");
    activationMenu.classList.add("hide");
    activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
    else{
        this.attackMade=this.attackTurn
        this.movment=this.charMovment
        this.activated=false//para que possa ser reativado
        this.returnToMain()
        let boardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(boardSpace).classList.remove("charSelected")
        activeChar="-"
        turnMenu.classList.remove("hide");
        activationMenu.classList.add("hide");
        activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}}
        else if(p2unitsCounter>1){
            this.attackMade=0
            this.movment=0
            this.activated=true
            this.returnToMain()
            let boardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(boardSpace).classList.remove("charSelected")
            activeChar="-"
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
            else{
                this.attackMade=this.attackTurn
                this.movment=this.charMovment
                this.activated=false//para que possa ser reativado
                this.returnToMain()
                let boardSpace=`#b${this.positionX}${this.positionY}`
                document.querySelector(boardSpace).classList.remove("charSelected")
                activeChar="-"
                turnMenu.classList.remove("hide");
                activationMenu.classList.add("hide");
                activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}
} 

}
class Demon extends Unit{
    constructor(playerId,playerName){
        super(`Demon`,100,1,52,1,1,20)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/demon/mainImage.gif";
    this.idle="./img/spritestouse/demon/idle.gif";
    this.atkMov="./img/spritestouse/demon/attack.gif";
    this.death="./img/spritestouse/demon/death.gif";
    this.hurt="./img/spritestouse/demon/hurt.gif"        
    }
    returnDamage(tr){
        console.log(attacker)
        if(this.range>=tr){
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(hurtedBoardSpace).src=this.atkMov;
            let hurted=this
            setTimeout(()=>{
            document.querySelector(hurtedBoardSpace).src=hurted.mainImage;
            console.log(attacker)
            attacker.health=attacker.health-(hurted.attack/2);
            selectedInformation(activeCharInformation,activeChar);
            let attackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(attackerBoardSpace).src=attacker.hurt;
            if(attacker.health<1){        
            setTimeout(()=>{
            let boardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(boardSpace).classList.remove("charSelected");
            attacker.die();
            attacker="-"
            activeChar="-";
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            },1500)
            }
            else 
            {
            setTimeout(()=>
            {
                let attackerBoardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
                document.querySelector(attackerBoardSpace).src=activeChar.idle;
            },1500)
            }
        
        },1500)    
        }
        else { this.movment=2
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(hurtedBoardSpace).src=this.mainImage;}
    }
    endUnitActivation()
{ if(this.movment>0){if(this.health+12>this.maxHealth){
    this.health=this.maxHealth
}
else {this.health=this.health+12}
};
    if(this.playerId==="player1"){if(p1unitsCounter>1){
    this.attackMade=0
    this.movment=0
    this.activated=true
    this.returnToMain()
    let boardSpace=`#b${this.positionX}${this.positionY}`
    document.querySelector(boardSpace).classList.remove("charSelected")
    activeChar="-"
    turnMenu.classList.remove("hide");
    activationMenu.classList.add("hide");
    activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
    else{
        this.attackMade=this.attackTurn
        this.movment=this.charMovment
        this.activated=false//para que possa ser reativado
        this.returnToMain()
        let boardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(boardSpace).classList.remove("charSelected")
        activeChar="-"
        turnMenu.classList.remove("hide");
        activationMenu.classList.add("hide");
        activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}}
        else if(p2unitsCounter>1){
            this.attackMade=0
            this.movment=0
            this.activated=true
            this.returnToMain()
            let boardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(boardSpace).classList.remove("charSelected")
            activeChar="-"
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"} 
            else{
                this.attackMade=this.attackTurn
                this.movment=this.charMovment
                this.activated=false//para que possa ser reativado
                this.returnToMain()
                let boardSpace=`#b${this.positionX}${this.positionY}`
                document.querySelector(boardSpace).classList.remove("charSelected")
                activeChar="-"
                turnMenu.classList.remove("hide");
                activationMenu.classList.add("hide");
                activeCharInformation.innerHTML="<h3>Activated Unit Information</h3>"}
} 
}

class Assassin extends Unit{
    constructor(playerId,playerName){
        super(`Assassin`,10,2,50,4,1,30)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/Rogue/mainImage.gif";
    this.idle="./img/spritestouse/Rogue/idle.gif";
    this.atkMov="./img/spritestouse/Rogue/attack.gif";
    this.death="./img/spritestouse/Rogue/death.gif";
    this.hurt="./img/spritestouse/Rogue/hurt.gif";        
    }
    makeAnAttack(tr){ 
        if(this.attackMade>0)
        {
            if(map[targetSpaceX][targetSpaceY]!=="-") 
            {
            if(!(this.playerName === map[targetSpaceX][targetSpaceY].playerName)){
        if (this.range>=tr){
            let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
                attacker.attackMade--;
                attacker.movment++;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);        
    }
    else {alert(`you can't attack there`)}
        }
    else {alert(`Don't try to be a traitor and kill your friends!`)}
    }
    else {alert(`Are you see seeing someone there??`)}
        } 
    else {alert(`This unit has no attacks left for this turn`)}
    }
}
class Medusa extends Unit{
    constructor(playerId,playerName){
        super(`Medusa`,10,2,50,4,1,30)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/medusa/mainImage.gif";
    this.idle="./img/spritestouse/medusa/idle.gif";
    this.atkMov="./img/spritestouse/medusa/attack.gif";
    this.death="./img/spritestouse/medusa/death.gif";
    this.hurt="./img/spritestouse/medusa/hurt.gif";        
    }
    makeAnAttack(tr){ 
        if(this.attackMade>0)
        {
            if(map[targetSpaceX][targetSpaceY]!=="-") 
            {
            if(!(this.playerName === map[targetSpaceX][targetSpaceY].playerName)){
        if (this.range>=tr){
            let attackerBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(attackerBoardSpace).src=this.atkMov;
            attacker = this;
        setTimeout(()=>{
            let newattackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`
                document.querySelector(newattackerBoardSpace).src=attacker.idle;
                (map[targetSpaceX][targetSpaceY]).receiveDamage(tr);
                attacker.attackMade--;
                attacker.movment++;
                selectedInformation(activeCharInformation,activeChar);
        setTimeout(()=>{if((attacker.movment===0)&&(attacker.attackMade===0))
        {
            attacker.endUnitActivation()
        }},4800);    
        },1500);        
    }
    else {alert(`you can't attack there`)}
        }
    else {alert(`Don't try to be a traitor and kill your friends!`)}
    }
    else {alert(`Are you see seeing someone there??`)}
        } 
    else {alert(`This unit has no attacks left for this turn`)}
    }
}

class Archer extends Unit{
    constructor(playerId,playerName){
        super(`Archer`,60,1,46,2,2,25)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/archer/mainImage.gif";
    this.idle="./img/spritestouse/archer/idle.gif";
    this.atkMov="./img/spritestouse/archer/attack.gif";
    this.death="./img/spritestouse/archer/death.gif";
    this.hurt="./img/spritestouse/archer/hurt.gif";        
    }
    returnDamage(tr){
        console.log(attacker)
        if(this.range>=tr){
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(hurtedBoardSpace).src=this.atkMov;
            let hurted=this
            setTimeout(()=>{
            document.querySelector(hurtedBoardSpace).src=hurted.mainImage;
            console.log(attacker)
            attacker.health=attacker.health-(hurted.attack);
            selectedInformation(activeCharInformation,activeChar);
            let attackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(attackerBoardSpace).src=attacker.hurt;
            if(attacker.health<1){        
            setTimeout(()=>{
            let boardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(boardSpace).classList.remove("charSelected");
            attacker.die();
            attacker="-"
            activeChar="-";
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            },1500)
            }
            else 
            {
            setTimeout(()=>
            {
                let attackerBoardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
                document.querySelector(attackerBoardSpace).src=activeChar.idle;
            },1500)
            }
        
        },1500)    
        }
        else {let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(hurtedBoardSpace).src=this.mainImage;}
    }
}

class Dragon extends Unit{
    constructor(playerId,playerName){
        super(`Dragon`,60,1,46,2,2,25)
        this.playerId=playerId;
        this.playerName=playerName;
        this.mainImage="./img/spritestouse/dragon/mainImage.gif";
    this.idle="./img/spritestouse/dragon/idle.gif";
    this.atkMov="./img/spritestouse/dragon/attack.gif";
    this.death="./img/spritestouse/dragon/death.gif";
    this.hurt="./img/spritestouse/dragon/hurt.gif";        
    }
    returnDamage(tr){
        console.log(attacker)
        if(this.range>=tr){
            let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
            document.querySelector(hurtedBoardSpace).src=this.atkMov;
            let hurted=this
            setTimeout(()=>{
            document.querySelector(hurtedBoardSpace).src=hurted.mainImage;
            console.log(attacker)
            attacker.health=attacker.health-(hurted.attack);
            selectedInformation(activeCharInformation,activeChar);
            let attackerBoardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(attackerBoardSpace).src=attacker.hurt;
            if(attacker.health<1){        
            setTimeout(()=>{
            let boardSpace=`#b${attacker.positionX}${attacker.positionY}`;
            document.querySelector(boardSpace).classList.remove("charSelected");
            attacker.die();
            attacker="-"
            activeChar="-";
            turnMenu.classList.remove("hide");
            activationMenu.classList.add("hide");
            },1500)
            }
            else 
            {
            setTimeout(()=>
            {
                let attackerBoardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
                document.querySelector(attackerBoardSpace).src=activeChar.idle;
            },1500)
            }
        
        },1500)    
        }
        else {let hurtedBoardSpace=`#b${this.positionX}${this.positionY}`
        document.querySelector(hurtedBoardSpace).src=this.mainImage;}
    }
}