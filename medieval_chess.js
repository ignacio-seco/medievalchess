/*function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }*/
let map
map=[//
//    Y  0    1   2   3   4   5  6   7   
       ["-","-","-","-","-","-","-","-"],//0
       ["-","-","-","-","-","-","-","-"],//1
       ["-","-","-","-","-","-","-","-"],//2
       ["-","-","-","-","-","-","-","-"],//3
       ["-","-","-","-","-","-","-","-"],//4
       ["-","-","-","-","-","-","-","-"], //5
       ["-","-","-","-","-","-","-","-"], //6
       ["-","-","-","-","-","-","-","-"] //7
//                                         X       
] 
cells=document.querySelectorAll(".cell")

let lastTargetSpace // celula previamente selecionada, necessário tirar a borda
let newTargetSpace =cells[0] //seleção atual do jogador, possui borda azul
newTargetSpace.classList.add("spaceSelected") //style da borda azul
let targetSpaceX =0 // coordenada x da seleção do jogador para fazer a conversa entre java e html
let targetSpaceY=0 // coordenada y da seleção do jogador para fazer a conversa entre java e html
let targetSpaceMap=map[targetSpaceX][targetSpaceY] // posição que está selecionada pelo mapa do java
let activeCharMapPosition // Posição do mapa em java do personagem ativado para a jogada
let activeCharHtmlPosition // posição do personagem ativo no html, necessário colocar borda vermelha
let activeCharLastHtmlPosition // ultima posição do personagem ativado, tirar a borda vermelha


//eventListener que altera o valor das variáveis em conformidade com a seleção do jogador
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
console.log(targetSpaceY)
targetSpaceMap=map[targetSpaceX][targetSpaceY]
console.log(targetSpaceMap)
;})}

console.log(cells)




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
    const mage1 = new Mage('Ignacio')
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
    console.log(map)