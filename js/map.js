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
let activeChar=false // Posição do mapa em java do personagem ativado para a jogada
let activeCharLastXPosition // ultima posição X do personagem ativado, tirar a borda vermelha
let activeCharLastYPosition // ultima posição Y do personagem ativado, tirar a borda vermelha
let totalRange // diferença positiva entre as coordenadas do jogador ativo e do target

//logica do mapa
for(let i=0;i<cells.length;i++)
{cells[i].addEventListener('click',()=>{
     lastTargetSpace=newTargetSpace;
     newTargetSpace=cells[i];
     lastTargetSpace.classList.remove("spaceSelected");
     newTargetSpace.classList.add("spaceSelected");
     //console.log(lastTargetSpace)
     console.log(newTargetSpace)    
    let childrens= Array.from(cells[i].children);
    //console.log(childrens)
    targetSpaceX=Number(childrens[0].textContent);
    console.log (targetSpaceX)
targetSpaceY=Number(childrens[1].textContent)
console.log(targetSpaceY)
targetSpaceMap=map[targetSpaceX][targetSpaceY]
//console.log(targetSpaceMap)
console.log(match)
console.log((map[targetSpaceX][targetSpaceY]).player)
console.log(match.activePlayer)
console.log(((map[targetSpaceX][targetSpaceY]).player==match.activePlayer))
console.log(match.playerActivationsLast > 0)
console.log(map)
console.log(typeof activeChar)
//console.log(map)
//console.log(match.player1Army)

;})}