const match = new MedievalChess

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

let cells=document.querySelectorAll(".cell")
let lastTargetSpace // celula previamente selecionada, necessário tirar a borda
let newTargetSpace =cells[0] //seleção atual do jogador, possui borda azul
newTargetSpace.classList.add("spaceSelected") //style da borda azul
let targetSpaceX =0 // coordenada x da seleção do jogador para fazer a conversa entre java e html
let targetSpaceY=0 // coordenada y da seleção do jogador para fazer a conversa entre java e html
let targetSpaceMap=map[targetSpaceX][targetSpaceY] // posição que está selecionada pelo mapa do java
let activeCharMapPosition // Posição do mapa em java do personagem ativado para a jogada
let activeCharHtmlPosition // posição do personagem ativo no html, necessário colocar borda vermelha
let activeCharLastHtmlPosition // ultima posição do personagem ativado, tirar a borda vermelha

//logica do mapa
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


//logica do jogo daqui para baixo


//setting up - primeira pagina, obter nome dos jogadores e tamanho do exército
let page1= document.querySelector(`#page1`)
let player1Name=document.querySelector(`#player1Name`)
let player2Name=document.querySelector(`#player2Name`)
let gameArmyPointsSet=document.querySelector(`#gameArmyPointsSet`)
let armyPointForThisMatch = document.querySelectorAll(`.armyPointForThisMatch`)
let getGameData = document.querySelector (`#getGameData`)
let page2=document.querySelector(`#page2`)
let page3=document.querySelector(`#page3`)
let page4=document.querySelector(`#page4`)
let page5=document.querySelector(`#page5`)
let page6=document.querySelector(`#page6`)
let player2out= document.querySelectorAll(`.player2output`)
let player1in= document.querySelectorAll(`.player1output`)


getGameData.addEventListener(`click`,()=>{
    console.log(player1Name)
    let name1 = player1Name.value
    console.log(name1) 
    if(name1!=="")
    {
     match.player1=name1
    }
    else {match.player1="Player 1"};
    player1in.forEach((element)=>element.textContent=match.player1)

    console.log(player2Name)
    let name2 = player2Name.value 
    if(name2!=="")
    {
     match.player2=name2
    }
    else {match.player2="Player 2"};
    player2out.forEach((element)=>element.textContent=match.player2)

    console.log(gameArmyPointsSet)

    let armyPointsNumber=Number(gameArmyPointsSet.value)
        if(armyPointsNumber>100)
        {
            if(armyPointsNumber<300)
            {
            match.gameArmyPoints=armyPointsNumber
            } 
            else match.gameArmyPoints=300 
        }
        else match.gameArmyPoints=100;
        armyPointForThisMatch.forEach((element)=>element.textContent=match.gameArmyPoints)
player2out.textContent=match.player2
player1in.textContent=match.player1

page1.classList.add("hide");
page2.classList.remove("hide");
console.log(match)   
} )

//setting up - segunda página, player 2 is out?
let  player2isout= document.querySelector(`#player2isout`)
player2isout.addEventListener(`click`,()=>
{
    page2.classList.add("hide");
    page3.classList.remove("hide");  
})

// setting up, terceira página - construir os exércitos

let addArmy1 = document.querySelector(`#addArmy1`)
let unitType
let player10Points=document.querySelector(`#player10Points`)
player10Points.textContents=match.player1ArmyPoints
let player1PointsLeft= document.querySelector(`#player1PointsLeft`)
player1PointsLeft.textContent=match.gameArmyPoints-match.player1ArmyPoints
let armyShow1 = document.querySelector(`#armyShow1`)
let spriteAdd
let removeP1Army = document.querySelector(`#removeP1Army`)
let P1finishedArmy = document.querySelector(`#p1finishedArmy`)
//botão de acrescentar exercitos
addArmy1.addEventListener("click",
()=> {
    let radioselected = document.getElementsByName('unit1');      
    for(i = 0; i < radioselected.length; i++) {
        if(radioselected[i].checked)
        {
            unitType=radioselected[i].value
        }}
        let unitBuilder
        let unitSprite
        if(unitType==="Mage"){
            unitBuilder= new Mage(match.player1)
            unitSprite= "./img/spritestouse/Mage/mage.png"
        }
        if(match.player1ArmyPoints + unitBuilder.points>match.gameArmyPoints)
        {
            alert ("This unit is too expensive, try a cheaper one or finalize this phase");
            return;
        }
        else match.player1Army.push(unitBuilder);
        match.player1ArmyPoints=match.player1ArmyPoints+unitBuilder.points;
        player10Points.innerHTML=match.player1ArmyPoints;
        player1PointsLeft.textContent=match.gameArmyPoints-match.player1ArmyPoints;
        spriteAdd= document.createElement('img')
        spriteAdd.src=unitSprite
        spriteAdd.classList.add("armySprite")
        armyShow1.appendChild(spriteAdd)
        console.log(match)})
        
        //remove army button
removeP1Army.addEventListener("click",()=>
{if(match.player1Army.length>0){
armyShow1.lastChild.remove()
match.player1ArmyPoints=match.player1ArmyPoints-(match.player1Army[match.player1Army.length-1].points)
match.player1Army.pop()
player10Points.innerHTML=match.player1ArmyPoints;
player1PointsLeft.textContent=match.gameArmyPoints-match.player1ArmyPoints;
console.log(match)}
else alert (`You don't have any troops to remove. Try hiring someone to be able to fire them...`)
return;
}
)
// Finished deploy button
P1finishedArmy.addEventListener("click",()=>{if(match.player1ArmyPoints<(match.gameArmyPoints/2)){alert (`please, add more units to your army. Don't make this a suicide mission!`);
return}
else page3.classList.add("hide");
page4.classList.remove("hide");})

// Place P1 units dom





