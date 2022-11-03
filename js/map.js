let map
map=
[//   Y  0   1   2   3   4   5   6   7   
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

//logica da seleção do mapa

let cells=document.querySelectorAll(".cell")
let lastTargetSpace // celula previamente selecionada, necessário tirar a borda
let newTargetSpace =cells[0] //seleção atual do jogador, possui borda azul
newTargetSpace.classList.add("spaceSelected") //style da borda azul
let targetSpaceX =0 // coordenada x da seleção do jogador para fazer a conversa entre java e html
let targetSpaceY=0 // coordenada y da seleção do jogador para fazer a conversa entre java e html
let targetSpaceMap=map[targetSpaceX][targetSpaceY] // posição que está selecionada pelo mapa do java
let activeChar="-" // Posição do mapa em java do personagem ativado para a jogada
let activeCharLastXPosition // ultima posição X do personagem ativado, tirar a borda vermelha
let activeCharLastYPosition // ultima posição Y do personagem ativado, tirar a borda vermelha
let totalRange // diferença positiva entre as coordenadas do jogador ativo e do target
let selectedSpaceInformation = document.querySelector(`#selectedSpaceInformation`)
let emptyCounter = 0
let emptyImg=["./img/empty space.jpg",`/img/emptySpace2.jpg`,`./img/emptySpace3.jpg`,`./img/emptySpace4.jfif`]
let activeCharInformation = document.querySelector(`#activeCharInformation`)
let mageTargetX
let mageTargetY
let attacker// this is necessary to keep in a independent variable so that the attacker cant use movment to run from the return damage
let p1unitsCounter=100
let p2unitsCounter=100


//Function that actualize the game menu information
function selectedInformation(space,target){
      if(space===selectedSpaceInformation){space.innerHTML="<h3>SELECTED SPACE INFORMATION</h3>"} else{space.innerHTML="<h3>Activated Unit Information</h3>"}
       spriteAdd= document.createElement('img')
       if(target==="-"){if((emptyCounter+1)<(emptyImg.length)){emptyCounter++}else{emptyCounter=0};
       spriteAdd.src=emptyImg[emptyCounter]; spriteAdd.classList.add("emptySpaceImg")}
       else {spriteAdd.src=target.atkMov;spriteAdd.classList.add("armySprite")}
        
        space.appendChild(spriteAdd)
        textInformation= document.createElement(`div`)
        textInformation.classList.add("rightMenuText")
        if(target==="-"){textInformation.innerHTML=`<p>EMPTY SPACE!</p>`} 
        else{
              textInformation.innerHTML=`<p>HEALTH:<span>${target.health}</span><br>ATTACK:${target.attack}<br>ATTACK RANGE:${target.range}<br>MOVEMENT:${target.movment}`
       }
       space.appendChild(textInformation)
 }
//logica do mapa
for(let i=0;i<cells.length;i++)
{cells[i].addEventListener('click',()=>{
lastTargetSpace=newTargetSpace;
newTargetSpace=cells[i];
lastTargetSpace.classList.remove("spaceSelected");
newTargetSpace.classList.add("spaceSelected");  
let childrens= Array.from(cells[i].children);
targetSpaceX=Number(childrens[0].textContent);
targetSpaceY=Number(childrens[1].textContent)
targetSpaceMap=map[targetSpaceX][targetSpaceY]
selectedInformation(selectedSpaceInformation,targetSpaceMap);
//console.log(newTargetSpace)  
//console.log(lastTargetSpace)
//console.log(childrens)
//console.log(targetSpaceMap)
//console.log (targetSpaceX)
//console.log(targetSpaceY)
//console.log(match)
//console.log((map[targetSpaceX][targetSpaceY]).player)
//console.log(match.activePlayer)
//console.log(((map[targetSpaceX][targetSpaceY]).player==match.activePlayer))
//console.log(match.playerActivationsLast > 0)
//console.log(typeof activeChar)
//console.log(map)
//console.log(match.player1Army)
})}