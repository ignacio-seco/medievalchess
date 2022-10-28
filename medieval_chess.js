let map
map=[//
//    Y  0    1   2   3   4   5  
       ["-","-","-","-","-","-"],//0
       ["-","-","-","-","-","-"],//1
       ["-","-","-","-","-","-"],//2
       ["-","-","-","-","-","-"],//3
       ["-","-","-","-","-","-"],//4
       ["-","-","-","-","-","-"]//5
//                                X       
]
let activeChar
console.log(map)

    class Character{
        constructor(job,health,attackTurn,attack,charMovment,range,points)
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
        constructor(){
            super(`Mage`,50,1,30,1,3,15)
        }

    }
    const mage1 = new Mage()
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
    console.log(map)