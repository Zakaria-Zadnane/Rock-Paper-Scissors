//Rock Paper Scissors

const Wins = document.querySelector('.Wins');
const Losses = document.querySelector('.Losses');
const Ties = document.querySelector('.Ties');
const Player = document.querySelector('.PlayerMove');
const Computer = document.querySelector('.ComputerMove');
const res = document.querySelector('.result');
const screen = document.querySelector('.screen');
const ResetButton = document.querySelector('.ResetButton');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0 ,
    losses : 0 ,
    ties : 0
} ;
// if (!score) 
//     {
//         score = {
//             wins : 0 ,
//             losses : 0 ,
//             ties : 0
//         }
//     }
instantScreen()
instantScore()



function Loop()
{
    for (let index = 0; index < 100; index++) {
            if (index <= 3 ) {
                playerMove = 'Scissors'
            }else if(index <= 6)
            {
                playerMove = 'Paper'
            }else
            {
                playerMove = 'Rock'
            }
        PlayerMove(playerMove)
        
    }
}
function ResetScore()
{
    score.wins = 0,
    score.losses = 0,
    score.ties = 0,
    localStorage.removeItem('score')
    instantScore()
    Player.innerHTML = '';
    Computer.innerHTML = '';
    res.innerHTML = '';
    instantScreen()
}

function Random()
{
    let ComputerMove = ''

    const RandomMove = Math.random();
    if(RandomMove <= 1 && RandomMove >= 2/3)
        {
            ComputerMove = 'Scissors';
        }else if(RandomMove < 2/3 && RandomMove >= 1/3)
        {
            ComputerMove = 'Paper';
        } 
        else
        {
            ComputerMove = 'Rock';
        } 
    return ComputerMove;
}


function PlayerMove(playerMove)
{
    let ComputerMove = Random()
    let result = '';
    if(ComputerMove === playerMove)
        {
            result = 'Tie';
        }
        if (playerMove === 'Rock' && ComputerMove === 'Paper')
            {
                result = 'Lose'
            }else if(playerMove === 'Rock' && ComputerMove === 'Scissors')
            {
                result = 'Win'
            }
        if (playerMove === 'Paper' && ComputerMove === 'Rock')
            {
                result = 'Win'

            }else if(playerMove === 'Paper' && ComputerMove === 'Scissors')
            {
                result = 'Lose'

            }
        if (playerMove === 'Scissors' && ComputerMove === 'Rock')
            {
                result = 'Lose'

            }else if(playerMove === 'Scissors' && ComputerMove === 'Paper')
            {
                result = 'Win'
            }
        
        if(result === 'Win')
            {
                score.wins++
            }else if(result === 'Lose')
            {
                score.losses++
            }else
            {
                score.ties++
            }

    localStorage.setItem('score', JSON.stringify(score));      
    screen.style.display ='block';
    Player.innerHTML = `Your Move is : <img src="img/${playerMove}-emoji.png" class="move-icon">`;
    Computer.innerHTML = `And Computer Move is : <img src="img/${ComputerMove}-emoji.png" class="move-icon">`;
    res.innerHTML = `You  : <b>${result}</b>`;
    instantScore()
    instantScreen()

        
}

function instantScore()
{
    Wins.innerHTML = `Wins : ${score.wins}`;
    Losses.innerHTML = `Losses : ${score.losses}`;
    Ties.innerHTML = `Ties : ${score.ties}`;    
}

function instantScreen()
{
    if (score.wins + score.losses + score.ties === 0) {
        screen.style.display = 'none';
        ResetButton.style.display = 'none';
    } else {
        ResetButton.style.display = 'block';
    }
}












































/*
//8a
const product =
{
    name : 'basketball',
    price : 2095,
    ['delivery-time'] : '3 days'
}
const product1 =
{
    name : 'basketball',
    price : 2095,
    ['delivery-time'] : '3 days'
}
const product2 =
{
    name : 'GolfBall',
    price : 3000,
    ['delivery-time'] : '2 days'
}
// console.log(product);

product.price = product.price + 500;
// console.log(product.price)
function ComparePrice(product1,product2)
{
    if(product1.price < product2.price)
    {
        console.log(`The Product with less expensive is ${product1.name}`)
    }else
    {
        console.log(`The Product with less expensive is ${product2.name}`)
    }
}
function isSameProduct(product1,product2)
{
    if(product1 === product2)
    {
        return console.log('True');
    }else
    {
        return console.log('False');
    }
}
isSameProduct(product,product1);
let message = 'Good Morning !!'
console.log(message.toLowerCase().repeat(2))
console.log(message.repeat(2))*/




