//setting up
let page1= document.querySelector(`#page1`)
let player1Name=document.querySelector(`#player1Name`)
let player2Name=document.querySelector(`#player2Name`)
let gameArmyPointsSet=document.querySelector(`#gameArmyPointsSet`)
let armyPointForThisMatch = document.querySelectorAll(`.armyPointForThisMatch`)
let getGameData = document.querySelector (`#getGameData`)
let page2=document.querySelector(`#page2`)
let gameSelector=document.querySelector(`#gameSelector`)
let page3=document.querySelector(`#page3`)
let page4=document.querySelector(`#page4`)
let page5=document.querySelector(`#page5`)
let page6=document.querySelector(`#page6`)
let page7=document.querySelector(`#page7`)
let page8=document.querySelector(`#page8`)
let page9=document.querySelector(`#page9`)
let player2out= document.querySelectorAll(`.player2output`)
let player1in= document.querySelectorAll(`.player1output`)
//query selector dos menus do tabuleiro
let turnMenu = document.querySelector(`#turnMenu`)
let activationMenu = document.querySelector(`#activationMenu`)
let activateUnitBtn = document.querySelector(`#activateUnitBtn`)
let endTurnBtn = document.querySelector(`#endTurnBtn`)
let attackBtn = document.querySelector(`#attackBtn`)
let endUnitActivationBtn = document.querySelector(`#endUnitActivationBtn`)
let gameMatchPage = document.querySelector(`#gameMatchPage`)
let activationsLast = document.querySelector(`#activationsLast`)





const match = new MedievalChess


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
gameSelector.classList.remove("hide");
console.log(match)   
} )

//setting up - game selector
let  typeABtn= document.querySelector(`#typeABtn`)
typeABtn.addEventListener(`click`,()=>
{
    match.typeOfGame="A";
    gameSelector.classList.add("hide");
    page2.classList.remove("hide");
    console.log(match.typeOfGame)  
})
let  typeBBtn= document.querySelector(`#typeBBtn`)
typeBBtn.addEventListener(`click`,()=>
{
    match.typeOfGame="B";
    console.log(match.typeOfGame)
    gameSelector.classList.add("hide");
    page2.classList.remove("hide");  
})




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
let unitType2
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
        //-------------------------------- acrescentar novas clases nessa área-----------------------------------------------------------------
        if(unitType==="Mage"){
            unitBuilder= new Mage("player1",match.player1,match.typeOfGame)}
        else if(unitType==="Knight"){
                unitBuilder= new Knight("player1",match.player1,match.typeOfGame)}
                else if(unitType==="Assassin"){
                    unitBuilder= new Assassin("player1",match.player1,match.typeOfGame)}
                    else if(unitType==="Archer"){
                        unitBuilder= new Archer("player1",match.player1,match.typeOfGame)};
                //---------------------------------------------acrescentar novas classes aqui------------------------------------------------------------
        unitSprite= unitBuilder.mainImage
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
P1finishedArmy.addEventListener("click",()=>
{
if(match.player1ArmyPoints<(match.gameArmyPoints/2))
{
    alert (`please, add more units to your army. Don't make this a suicide mission!`);
return
}
else
speedBooster1 = match.player1Army.length*0.0002
for(let i=0;i<match.player1Army.length;i++)
{
    match.player1Army[i].activationTime+=speedBooster1;
    speedBooster1-=0.0002
}
{ 
p1DeployArray=Object.assign([],match.player1Army)
p1lastUnitImage.src=p1DeployArray[p1DeployArray.length-1].mainImage
p1lastUnitJob.textContent=p1DeployArray[p1DeployArray.length-1].job
page3.classList.add("hide");
page4.classList.remove("hide");
}}
)

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
    let radioselected2 = document.getElementsByName('unit2');      
    for(i = 0; i < radioselected2.length; i++) {
        if(radioselected2[i].checked)
        {
            unitType2=radioselected2[i].value
        }}
        let unitBuilder2
        let unitSprite2
        //-----------------------------------------acrescentar novas classes abaixo--------------------------------------------------------------------
        if(unitType2==="Jinn"){
            unitBuilder2 = new Jinn("player2",match.player2,match.typeOfGame)}
            else if(unitType2==="Demon"){
                unitBuilder2 = new Demon("player2",match.player2,match.typeOfGame)}
                else if(unitType2==="Medusa"){
                    unitBuilder2 = new Medusa("player2",match.player2,match.typeOfGame)}
                    else if(unitType2==="Dragon"){
                        unitBuilder2 = new Dragon("player2",match.player2,match.typeOfGame)}
                    ;
            //----------------------------------acrescentar novas classes acima---------------------------------------------------------------------------
        unitSprite2 = unitBuilder2.mainImage
        if(match.player2Army.length!==16){if(match.player2ArmyPoints + unitBuilder2.points>match.gameArmyPoints)
        {
            alert ("This unit is too expensive, try a cheaper one or finalize this phase");
            return;
        }
        else match.player2Army.push(unitBuilder2);
        match.player2ArmyPoints=match.player2ArmyPoints+unitBuilder2.points;
        player20Points.innerHTML=match.player2ArmyPoints;
        player2PointsLeft.textContent=match.gameArmyPoints-match.player2ArmyPoints;
        spriteAdd= document.createElement('img')
        spriteAdd.src=unitSprite2
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
speedBooster2 = (match.player2Army.length*0.0002)-0.0001
for(let i=0;i<match.player2Army.length;i++)
{
    match.player2Army[i].activationTime+=speedBooster2;
    speedBooster2-=0.0002
}
{ 
p2DeployArray=Object.assign([],match.player2Army)
p2lastUnitImage.src=p2DeployArray[p2DeployArray.length-1].mainImage
p2lastUnitJob.textContent=p2DeployArray[p2DeployArray.length-1].job
page6.classList.add("hide");
page7.classList.remove("hide");}})

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
        if(match.typeOfGame==="A"){
        match.startMatchA()
        page7.classList.add("hide");
        page8.classList.remove("hide");
        
    }
    else
    {
        document.querySelector(`#turnInformation`).classList.add("hide");
        turnMenu.classList.add("hide");
        activationMenu.classList.remove("hide");
        allMapArray=[];
        let unit;
        for(let n=0;n<map.length;n++)
        {
            for(let k=0;k<map[n].length;k++)
            {
            if(typeof map[n][k]==="object")
                {
                unit = map[n][k];
                unit.activationTime+=unit.speed    
                allMapArray.push(unit)
                } 
            else continue
            }
        }
            {
            sortedMapArray=allMapArray.sort((a,b)=>b.activationTime-a.activationTime);
            let nextToPlay = sortedMapArray[0];
            activeChar = map[nextToPlay.positionX][nextToPlay.positionY];
            changeTurnName.textContent=activeChar.playerName;
            activeChar.activateIdle();
            match.activePlayer=activeChar.playerName
            page7.classList.add("hide");
        page8.classList.remove("hide");
            let boardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
            document.querySelector(boardSpace).classList.add("charSelected");
            selectedInformation(activeCharInformation,activeChar);
            gameMatchPage.classList.remove("hide");
            setTimeout(()=>{gameMatchPage.classList.add("hide")},2000)
            }

    }
}
else alert (`You need to deploy all of your unity's`)
})

//--------------------------------Here ends the game setup and starts the board DOM-----------------------------------------------------------------


function endTurn(){//this function is not used on game B... the player is decided in accordance of the unit order of play 
    if(activeChar!=="-"){
        activeChar.endUnitActivation()};       
    if(match.activePlayer===match.player1){
    match.player1Army.forEach((element)=>{
        element.movment=element.charMovment;
        element.attackMade=element.attackTurn;
        element.activated=false})
        match.activePlayer=match.player2
        match.playerActivationsLast=match.turnActivations;
        document.querySelector(`#playerTurn`).textContent=match.activePlayer
        changeTurnName.textContent=match.activePlayer;
        gameMatchPage.classList.remove("hide");
        activationsLast.textContent=match.playerActivationsLast;
        setTimeout(()=>{gameMatchPage.classList.add("hide")},2000)

    }
else {match.player2Army.forEach((element)=>{
    element.movment=element.charMovment;
    element.attackMade=element.attackTurn;
    element.activated=false})
    match.activePlayer=match.player1
    match.playerActivationsLast=match.turnActivations;
    document.querySelector(`#playerTurn`).textContent=match.activePlayer;
    changeTurnName.textContent=match.activePlayer;
    gameMatchPage.classList.remove("hide");
    activationsLast.textContent=match.playerActivationsLast;
    setTimeout(()=>{gameMatchPage.classList.add("hide")},2000)
}
}

function activateUnit(){
    if(match.playerActivationsLast !== 0)
    { 
    if(map[targetSpaceX][targetSpaceY]!=="-")
    {
if((map[targetSpaceX][targetSpaceY]).playerName==match.activePlayer)
{
    if(!((map[targetSpaceX][targetSpaceY]).activated))
    {
     activeChar=map[targetSpaceX][targetSpaceY];
    //console.log(activeChar)
    activeChar.activateIdle();
    match.playerActivationsLast--;
    activationsLast.textContent=match.playerActivationsLast
    let boardSpace=`#b${activeChar.positionX}${activeChar.positionY}`;
    //console.log(boardSpace)
    document.querySelector(boardSpace).classList.add("charSelected")
    turnMenu.classList.add("hide");
    activationMenu.classList.remove("hide");
    selectedInformation(activeCharInformation,activeChar)  
    }
    else alert (`This unit has already been activated this turn`);
    return;
}
else {alert (`Don't try to mind controller other people! You can't activate another player unit!`);
    return;}
}
else {alert (`Do you also see dead people??? This is an empty space!!`)}
}
else {endTurn()}
}
function calculateRange(){
    console.log(activeChar)
    let rangeX;
    if((activeChar.positionX-targetSpaceX)<0)
    {
    rangeX=(activeChar.positionX-targetSpaceX)*-1
    }
    else rangeX= activeChar.positionX-targetSpaceX;
    console.log(rangeX)
    let rangeY
    if((activeChar.positionY-targetSpaceY)<0)
    {
    rangeY=(activeChar.positionY-targetSpaceY)*-1
    }
    else rangeY= activeChar.positionY-targetSpaceY;
    console.log(rangeY)
    totalRange=rangeX+rangeY
    console.log(totalRange)
}
function activeAttack(){ 
    calculateRange();
    activeChar.makeAnAttack(totalRange)    
}

function endUnitActivationDOM(){
    activeChar.endUnitActivation()
}

activateUnitBtn.addEventListener(`click`,activateUnit)
endTurnBtn.addEventListener(`click`,endTurn)
attackBtn.addEventListener(`click`,activeAttack)
endUnitActivationBtn.addEventListener(`click`,endUnitActivationDOM)
document.addEventListener("keydown",function(e)
{if(e.key=="ArrowLeft"||e.key=="a"){activeChar.moveLeft()}
else if(e.key=="ArrowRight"||e.key=="d"){activeChar.moveRight()}
else if(e.key=="ArrowUp"||e.key=="w"){activeChar.moveUp()}
else if(e.key=="ArrowDown"||e.key=="s"){activeChar.moveDown()}
else if(e.key==" "){if(match.activePlayer!=="-"){if(activeChar==="-"){activateUnit()} else{activeAttack()}}}
else if(e.key=="Escape"){if(activeChar!=="-"){endUnitActivationDOM()} else{return}}
else if(e.key=="p"){if(match.activePlayer!=="-"){if(activeChar==="-"){endTurn()} else{return}}}
})
