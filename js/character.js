class Character{
    constructor(job,health,attackTurn,attack,charMovment,range,points,player,mainImage,idle,atkMov,death)
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
        this.positioned=false
        this.player=player
        this.mainImage=mainImage
        this.idle=idle
        this.atkMov=atkMov
        this.death=death
                    
    }
    placeUnity(){            if(((map[targetSpaceX])[targetSpaceY])==="-")
    {
    ((map[targetSpaceX])[targetSpaceY])=this;

    this.positionX=targetSpaceX;
this.positionY=targetSpaceY;
this.positioned=true

}
else alert(`you can't place your unity there`)
}

activateChar()
{
activeCharMapPosition=map[this.positionX][this.positionY]
}
    moveRight(){if((this.positionY+1<map[this.positionX].length)&&(map[this.positionX][this.positionY+1]=="-")){
    map[this.positionX][this.positionY]="-";
    this.positionY++;
map[this.positionX][this.positionY]=this;
activeCharMapPosition=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

else alert(`you can't do this movment`); return; 

}
moveLeft(){if((this.positionY-1>-1)&&(map[this.positionX][this.positionY-1]=="-")){
map[this.positionX][this.positionY]="-";
this.positionY--;
map[this.positionX][this.positionY]=this;
activeCharMapPosition=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

else alert(`you can't do this movment`); return;
 
}
moveUp(){if((this.positionX-1>-1)&&(map[this.positionX-1][this.positionY]=="-")){
map[this.positionX][this.positionY]="-";
this.positionX--;
map[this.positionX][this.positionY]=this;
activeCharMapPosition=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

else alert(`you can't do this movment`); return;
 
}
moveDown(){if((this.positionX+1<map.length)&&(map[this.positionX+1][this.positionY]=="-")){
map[this.positionX][this.positionY]="-";
this.positionX++;
map[this.positionX][this.positionY]=this;
activeCharMapPosition=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 
else alert(`you can't do this movment`); return;
 
}
attack(x,y){
let rangeX=this.positionX-x;
let rangeY=this.positionY-y;
if (rangeX<0){rangeX=rangeX*-1};
if (rangeY<0){rangeY=rangeY*-1}
let totalRange=rangeX+rangeY
if (this.range<=totalRange){(map[x][y]).receiveDamage();
this.attackMade--    
if((this.movment=0)&&(this.attackMade=0)){this.endTurn()}}
else alert(`you can't attack there`); return;
}
endTurn(){
this.movment=this.charMovment
}
receiveDamage(){}
}



class Mage extends Character{
    constructor(player,mainImage,idle,atkMov,death){
        super(`Mage`,50,1,30,1,3,15)
        this.player=player;
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
let mage1 = new Mage("ignácio")