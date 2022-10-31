//setting up
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
let page7=document.querySelector(`#page7`)
let page8=document.querySelector(`#page8`)
let player2out= document.querySelectorAll(`.player2output`)
let player1in= document.querySelectorAll(`.player1output`)
//query selector dos menus do tabuleiro
let turnMenu = document.querySelector(`#turnMenu`)
let activationMenu = document.querySelector(`#activationMenu`)
let activeCharInformation = document.querySelector(`#activeCharInformation`)
let selectedSpaceInformation = document.querySelector(`#selectedSpaceInformation`)
let activateUnitBtn = document.querySelector(`#activateUnitBtn`)
let endTurnBtn = document.querySelector(`#endTurnBtn`)
let attackBtn = document.querySelector(`#attackBtn`)
let endUnitActivation = document.querySelector(`endUnitActivation`)





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
console.log(((map[targetSpaceX][targetSpaceY]).player==this.activePlayer))
//console.log(map)
//console.log(match.player1Army)

;})}


//logica do jogo daqui para baixo
//-------------------------------------------------------------This is the game setup---------------------------------------------------------------------------
//setting up
// logica da página 1 - primeira pagina, obter nome dos jogadores e tamanho do exército

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
let p1DeployArray
let p1lastUnitImage = document.querySelector(`#p1lastUnitImage`)
let p1lastUnitJob = document.querySelector(`#p1lastUnitJob`)
let p1DeployBtn = document.querySelector(`#p1DeployBtn`)
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
            unitSprite= unitBuilder.mainImage
        }//acrescentar novas classes aqui
        if(match.player1Army.length!==16){if(match.player1ArmyPoints + unitBuilder.points>match.gameArmyPoints)
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
        console.log(match)}
        else alert("16 units is the biggest army allowed");
        return
    }
    )
        
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
// Finished deploy button and start Deploy fase arrangements
P1finishedArmy.addEventListener("click",()=>{if(match.player1ArmyPoints<(match.gameArmyPoints/2)){alert (`please, add more units to your army. Don't make this a suicide mission!`);
return}
else 
p1DeployArray=Object.assign([],match.player1Army)
p1lastUnitImage.src=p1DeployArray[p1DeployArray.length-1].mainImage
p1lastUnitJob.textContent=p1DeployArray[p1DeployArray.length-1].job
page3.classList.add("hide");
page4.classList.remove("hide");})

// Place P1 units dom
p1DeployBtn.addEventListener("click",()=>{if(p1DeployArray.length>0)
    {if(map[targetSpaceX][targetSpaceY]==="-"){
        let deployedUnit=p1DeployArray[p1DeployArray.length-1]
        map[targetSpaceX][targetSpaceY]=p1DeployArray[p1DeployArray.length-1];
        let deploySpace=`#d${targetSpaceX}${targetSpaceY}`
        let boardSpace=`#b${targetSpaceX}${targetSpaceY}`
        map[targetSpaceX][targetSpaceY].positionX=targetSpaceX;
        map[targetSpaceX][targetSpaceY].positionY=targetSpaceY;
        document.querySelector(deploySpace).src=deployedUnit.mainImage
        document.querySelector(boardSpace).src=deployedUnit.mainImage
        p1DeployArray.pop();
        console.log(map)

        if(p1DeployArray.length>0)
        {
            p1lastUnitImage.src=p1DeployArray[p1DeployArray.length-1].mainImage
            p1lastUnitJob.textContent=p1DeployArray[p1DeployArray.length-1].job
        }
        else  
        p1lastUnitImage.src=""
        p1lastUnitJob.textContent=""
    } else alert (`This place is already taken by another unit. Use an empty one`);
    return
}
    console.log(map)
}
)

let p1UnityReturnBtn = document.querySelector(`#p1UnityReturnBtn`)
let p1SetupFinishedBtn = document.querySelector(`#p1SetupFinishedBtn`)

p1UnityReturnBtn.addEventListener("click",()=> 
{if(map[targetSpaceX][targetSpaceY]!=="-"){
    p1DeployArray.push(map[targetSpaceX][targetSpaceY]);
    map[targetSpaceX][targetSpaceY]="-";
    let deploySpace=`#d${targetSpaceX}${targetSpaceY}`;
    let boardSpace=`#b${targetSpaceX}${targetSpaceY}`;
    document.querySelector(deploySpace).src="";
    document.querySelector(boardSpace).src="";
    p1lastUnitImage.src=p1DeployArray[p1DeployArray.length-1].mainImage;
    p1lastUnitJob.textContent=p1DeployArray[p1DeployArray.length-1].job;

}
else alert (`There is no unity here to call to the Barracks!`);
return
}
)

p1SetupFinishedBtn.addEventListener("click",()=>
{
    if(p1DeployArray.length==0)
    {
        page4.classList.add("hide");
        page5.classList.remove("hide");
    }
else alert (`You need to deploy all of your unity's`)
})



//from here, is the player 2 

//setting up - segunda página, player 2 is out?
let player2IsHereAgain= document.querySelector(`#player2IsHereAgain`)
player2IsHereAgain.addEventListener(`click`,()=>
{
    page5.classList.add("hide");
    page6.classList.remove("hide");  
})

// setting up, terceira página - construir os exércitos

let addArmy2 = document.querySelector(`#addArmy2`)
let player20Points=document.querySelector(`#player20Points`)
player20Points.textContents=match.player2ArmyPoints
let player2PointsLeft= document.querySelector(`#player2PointsLeft`)
player2PointsLeft.textContent=match.gameArmyPoints-match.player2ArmyPoints
let armyShow2 = document.querySelector(`#armyShow2`)
let removeP2Army = document.querySelector(`#removeP2Army`)
let P2finishedArmy = document.querySelector(`#p2finishedArmy`)
let p2DeployArray
let p2lastUnitImage = document.querySelector(`#p2lastUnitImage`)
let p2lastUnitJob = document.querySelector(`#p2lastUnitJob`)
let p2DeployBtn = document.querySelector(`#p2DeployBtn`)
//botão de acrescentar exercitos
addArmy2.addEventListener("click",
()=> {
    let radioselected = document.getElementsByName('unit2');      
    for(i = 0; i < radioselected.length; i++) {
        if(radioselected[i].checked)
        {
            unitType=radioselected[i].value
        }}
        let unitBuilder
        let unitSprite
        if(unitType==="Mage"){
            unitBuilder= new Mage(match.player2)
            unitSprite= unitBuilder.mainImage
        }//acrescentar novas classes aqui
        if(match.player2Army.length!==16){if(match.player2ArmyPoints + unitBuilder.points>match.gameArmyPoints)
        {
            alert ("This unit is too expensive, try a cheaper one or finalize this phase");
            return;
        }
        else match.player2Army.push(unitBuilder);
        match.player2ArmyPoints=match.player2ArmyPoints+unitBuilder.points;
        player20Points.innerHTML=match.player2ArmyPoints;
        player2PointsLeft.textContent=match.gameArmyPoints-match.player2ArmyPoints;
        spriteAdd= document.createElement('img')
        spriteAdd.src=unitSprite
        spriteAdd.classList.add("armySprite")
        armyShow2.appendChild(spriteAdd)
        console.log(match)}
        else alert("16 units is the biggest army allowed");
        return
    }
    )
        
        //remove army button
removeP2Army.addEventListener("click",()=>
{if(match.player2Army.length>0){
armyShow2.lastChild.remove()
match.player2ArmyPoints=match.player2ArmyPoints-(match.player2Army[match.player2Army.length-1].points)
match.player2Army.pop()
player20Points.innerHTML=match.player2ArmyPoints;
player2PointsLeft.textContent=match.gameArmyPoints-match.player2ArmyPoints;
console.log(match)}
else alert (`You don't have any troops to remove. Try hiring someone to be able to fire them...`)
return;
}
)
// Finished deploy button and start Deploy fase arrangements
P2finishedArmy.addEventListener("click",()=>{if(match.player2ArmyPoints<(match.gameArmyPoints/2)){alert (`please, add more units to your army. Don't make this a suicide mission!`);
return}
else 
p2DeployArray=Object.assign([],match.player2Army)
p2lastUnitImage.src=p2DeployArray[p2DeployArray.length-1].mainImage
p2lastUnitJob.textContent=p2DeployArray[p2DeployArray.length-1].job
page6.classList.add("hide");
page7.classList.remove("hide");})

// Place P1 units dom
p2DeployBtn.addEventListener("click",()=>{if(p2DeployArray.length>0)
    {if(map[targetSpaceX][targetSpaceY]==="-"){
        let deployedUnit=p2DeployArray[p2DeployArray.length-1]
        map[targetSpaceX][targetSpaceY]=p2DeployArray[p2DeployArray.length-1];
        let deploySpace=`#d${targetSpaceX}${targetSpaceY}`
        let boardSpace=`#b${targetSpaceX}${targetSpaceY}`
        map[targetSpaceX][targetSpaceY].positionX=targetSpaceX;
        map[targetSpaceX][targetSpaceY].positionY=targetSpaceY;
        document.querySelector(deploySpace).src=deployedUnit.mainImage
        document.querySelector(boardSpace).src=deployedUnit.mainImage
        p2DeployArray.pop();
        console.log(map)

        if(p2DeployArray.length>0)
        {
            p2lastUnitImage.src=p2DeployArray[p2DeployArray.length-1].mainImage
            p2lastUnitJob.textContent=p2DeployArray[p2DeployArray.length-1].job
        }
        else  
        p2lastUnitImage.src=""
        p2lastUnitJob.textContent=""
    } else alert (`This place is already taken by another unit. Use an empty one`);
    return
}
    console.log(map)
}
)

let p2UnityReturnBtn = document.querySelector(`#p2UnityReturnBtn`)
let p2SetupFinishedBtn = document.querySelector(`#p2SetupFinishedBtn`)

p2UnityReturnBtn.addEventListener("click",()=> 
{if(map[targetSpaceX][targetSpaceY]!=="-"){
    p2DeployArray.push(map[targetSpaceX][targetSpaceY]);
    map[targetSpaceX][targetSpaceY]="-";
    let deploySpace=`#d${targetSpaceX}${targetSpaceY}`;
    let boardSpace=`#b${targetSpaceX}${targetSpaceY}`;
    document.querySelector(deploySpace).src="";
    document.querySelector(boardSpace).src="";
    p2lastUnitImage.src=p2DeployArray[p2DeployArray.length-1].mainImage;
    p2lastUnitJob.textContent=p2DeployArray[p2DeployArray.length-1].job;

}
else alert (`There is no unity here to call to the Barracks!`);
return
}
)

p2SetupFinishedBtn.addEventListener("click",()=>
{
    if(p2DeployArray.length==0)
    {
        match.startMatch()
        page7.classList.add("hide");
        page8.classList.remove("hide");
        
    }
else alert (`You need to deploy all of your unity's`)
})

//--------------------------------Here ends the game setup and starts the board DOM-----------------------------------------------------------------
activateUnitBtn.addEventListener(`click`,match.activateChar)
endTurnBtn.addEventListener(`click`,match.endTurn)
attackBtn.addEventListener(`click`,()=>{activeChar.attack()})
endUnitActivation.addEventListener(`click`,()=>{activeChar.endUnitActivation()})
document.addEventListener("keydown",function(e)
{if(e.key=="ArrowLeft"){activeChar.moveRight}
else if(e.key=="ArrowRight"){activeChar.moveLeft}
else if(e.key=="ArrowUp"){activeChar.moveUp}
else if(e.key=="ArrowDown"){activeChar.moveDown}
})
