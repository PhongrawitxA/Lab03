const table = [];
const player = [];
const bot = [];
// for(i=1;i<=9;i++)
// {   
//     if(i%2==1)
//     {   
//         document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click",onClick));
//     }
//     else if(i%2==0)
//     {
//         AI();
//     }
// }
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click",onClick));
function onClick(clickedCellEvent){
    console.log("clicked");
    const clickedCell = clickedCellEvent.target;
    // const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    var id = clickedCell.getAttribute('id');
    if(table.includes(id))
    {
        return false;
    }
    else{
    console.log(id);
    table.push(id);
    player.push(id);
    clickedCell.src = "https://e7.pngegg.com/pngimages/389/161/png-clipart-sign-symbol-x-mark-check-mark-christian-cross-symbol-miscellaneous-angle.png";
    console.log(table);
    console.log(player);
    if(checkWinner())
    {
        return false;
    }
    else{
        AI();
    }
    }
}

function AI(){
    while(true)
    {   var random = Math.floor(Math.random()*9 + 1);
        const randomCell = document.getElementById(random);
        var id = randomCell.getAttribute('id');
        if(table.length==9)
        {
            break;
        }
        else if(table.includes(id))
        {
            continue;
        }

        else{
            randomCell.src = "https://mpng.subpng.com/20180711/rrv/kisspng-circle-plus-and-minus-signs-plus-minus-sign-subtra-carbon-cycle-5b463d4a3dde33.2699659215313298662534.jpg";
            console.log(id);
            table.push(id);
            bot.push(id);
            console.log(table);
            console.log(bot);
            checkWinner();
            break;
        }
    }
}

function checkWinner(){
    if( (player.includes("1") && player.includes("2") && player.includes("3")) ||
        (player.includes("4") && player.includes("5") && player.includes("6")) ||
        (player.includes("7") && player.includes("8") && player.includes("9")) ||
        (player.includes("1") && player.includes("5") && player.includes("9")) ||
        (player.includes("1") && player.includes("4") && player.includes("7")) ||
        (player.includes("2") && player.includes("5") && player.includes("8")) ||
        (player.includes("3") && player.includes("5") && player.includes("7")) ||
        (player.includes("3") && player.includes("6") && player.includes("9")) 
    )
    {   
        var text = document.getElementById("text").style.visibility ="visible";
        return true;
    }
    else if(
        (bot.includes("1") && bot.includes("2") && bot.includes("3")) ||
        (bot.includes("4") && bot.includes("5") && bot.includes("6")) ||
        (bot.includes("7") && bot.includes("8") && bot.includes("9")) ||
        (bot.includes("1") && bot.includes("5") && bot.includes("9")) ||
        (bot.includes("1") && bot.includes("4") && bot.includes("7")) ||
        (bot.includes("2") && bot.includes("5") && bot.includes("8")) ||
        (bot.includes("3") && bot.includes("5") && bot.includes("7")) ||
        (bot.includes("3") && bot.includes("6") && bot.includes("9"))
    )    {
        var text = document.getElementById("text").innerText= "Bot win";
        text = document.getElementById("text").style.visibility ="visible";
        return true;
    }
    else{
        return false;
    }
}

