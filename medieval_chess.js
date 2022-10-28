/*function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }*/
let map
map=[//
//    Y  0    1   2   3   4   5  
       ["-","-","-","-","-","-"],//0
       ["-","-","-","-","-","-"],//1
       ["-","-","-","-","-","-"],//2
       ["-","-","-","-","-","-"],//3
       ["-","-","-","-","-","-"],//4
       ["-","-","-","-","-","-"] //5
//                                X       
] 
cells=document.querySelectorAll(".cell")
let lastTargetSpace
let newTargetSpace =cells[0]
newTargetSpace.classList.add("spaceSelected")
let targetSpaceX =0
let targetSpaceY=0
for(let i=0;i<cells.length;i++)
{cells[i].addEventListener('click',()=>{
     lastTargetSpace=newTargetSpace;
     newTargetSpace=cells[i];
     lastTargetSpace.classList.remove("spaceSelected");
     newTargetSpace.classList.add("spaceSelected");
     console.log(lastTargetSpace)
     console.log(newTargetSpace)    
    let childrens= Array.from(cells[i].children);
    console.log(childrens)
    targetSpaceX=Number(childrens[0].textContent);
    console.log (targetSpaceX)
targetSpaceY=Number(childrens[1].textContent)
console.log(targetSpaceY);})}
let activeChar
let targetSpaceMap=map[targetSpaceX][targetSpaceY]
console.log(cells)

/*    class Character{
        constructor(job,health,attackTurn,attack,charMovment,range,points,player)
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
                        
        }
        placeUnity(x,y){            if(((map[Number(x)])[Number(y)])==="-")
        {
        ((map[x])[y])=this;
        this.positionX=Number(x);
    this.positionY=Number(y);
    this.positioned=true
}
else alert(`you can't place your unity there`)
}

activateChar()
{
    activeChar=map[this.positionX][this.positionY]
}
        moveRight(){if((this.positionY+1<map[this.positionX].length)&&(map[this.positionX][this.positionY+1]=="-")){
        map[this.positionX][this.positionY]="-";
        this.positionY++;
    map[this.positionX][this.positionY]=this;
    activeChar=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

    else alert(`you can't do this movment`); return; 

    }
 moveLeft(){if((this.positionY-1>-1)&&(map[this.positionX][this.positionY-1]=="-")){
    map[this.positionX][this.positionY]="-";
    this.positionY--;
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

else alert(`you can't do this movment`); return;
     
 }
 moveUp(){if((this.positionX-1>-1)&&(map[this.positionX-1][this.positionY]=="-")){
    map[this.positionX][this.positionY]="-";
    this.positionX--;
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
this.movment=this.movment-1
} 

else alert(`you can't do this movment`); return;
     
 }
 moveDown(){if((this.positionX+1<map.length)&&(map[this.positionX+1][this.positionY]=="-")){
    map[this.positionX][this.positionY]="-";
    this.positionX++;
map[this.positionX][this.positionY]=this;
activeChar=map[this.positionX][this.positionY];
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
        constructor(player){
            super(`Mage`,50,1,30,1,3,15,player)
            this.player=player
            this.sprites= { 
        mainImage:"./img/spritestouse/Mage/mage.png",
        idle:
        [
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
        ],
        atkMov:
        [
        "./img/spritestouse/Mage/Attack/attack1.png",
        "./img/spritestouse/Mage/Attack/attack2.png",
        "./img/spritestouse/Mage/Attack/attack3.png",
        "./img/spritestouse/Mage/Attack/attack4.png",
        "./img/spritestouse/Mage/Attack/attack5.png",
        "./img/spritestouse/Mage/Attack/attack6.png",
        "./img/spritestouse/Mage/Attack/attack7.png",
        ],
        death:
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
        ]

    }
            
        }

    }
    const mage1 = new Mage('Ignacio')
    console.log(map)
    mage1.placeUnity(2,0)
    console.log(map)
    mage1.activateChar()
    console.log(map)
    console.log(activeChar)
    activeChar.moveDown()
    console.log(map)
    activeChar.moveUp()
    console.log(map)
    activeChar.moveUp()
    console.log(map)*/