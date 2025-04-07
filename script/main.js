//Rock Paper Scissors

const Wins = document.querySelector('.Wins');
const Losses = document.querySelector('.Losses');
const Ties = document.querySelector('.Ties');
const Player = document.querySelector('.PlayerMove');
const Computer = document.querySelector('.ComputerMove');
const res = document.querySelector('.result');
const screen = document.querySelector('.screen');
const ResetButton = document.querySelector('.ResetButton');
const autoPlayButton = document.querySelector('.autoPlay');

const rockButton = document.querySelector('.js-button-rock');
const papperButton = document.querySelector('.js-button-papper');
const scissorsButton = document.querySelector('.js-button-scissors');





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
        let playerMove = Random()
        PlayerMove(playerMove)
        
    }
}

const infoButtoon = document.querySelector('.info')
const block = document.querySelector('.block')
const overlay = document.querySelector('.overlay')
    infoButtoon.addEventListener('click', () =>
        {
            block.style.display = 'block'
            overlay.style.display = 'block'
        });
    overlay.addEventListener('click', () => {
        block.style.display = 'none';
        overlay.style.display = 'none';
        confirmReset.style.display = 'none'

    });

const confirmReset = document.querySelector('.confirmReset')
const positiveConfirm = document.querySelector('.positiveConfirm')
const nigtiveConfirm = document.querySelector('.nigtiveConfirm')

ResetButton.addEventListener('click', () =>
    {
        confirmReset.style.display = 'block'
        overlay.style.display = 'block'
    })
    positiveConfirm.addEventListener('click', () =>
        {
            ResetScore();
            confirmReset.style.display = 'none'
            overlay.style.display = 'none'
        })
    nigtiveConfirm.addEventListener('click', () =>
        {
            confirmReset.style.display = 'none'
            overlay.style.display = 'none'
        })
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

let isAutoPlaying = false ;
let Interval ;

function autoPlay()
{
    if(!isAutoPlaying)
    {
        Interval = setInterval(() =>
        {
            const playerMove = Random();
            PlayerMove(playerMove);
            
        }, 1000)
        isAutoPlaying = true ;
        autoPlayButton.innerHTML = 'Stop ■';

    }else
    {
        clearInterval(Interval)
        isAutoPlaying = false ;
        autoPlayButton.innerHTML = 'Auto Play ▶';
    }
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

rockButton.addEventListener('click', ()=>
    {
        PlayerMove('Rock');
    })
papperButton.addEventListener('click', ()=>
    {
        PlayerMove('Paper');
    })
scissorsButton.addEventListener('click', ()=>
    {
        PlayerMove('Scissors');
    })

// document.body.addEventListener('keydown', (event)=>
//     {
//         if(event.key === 'r')
//             {
//                 PlayerMove('Rock');
//             }
//         if(event.key === 'p')
//             {
//                 PlayerMove('Paper');
//             }
//         if(event.key === 's')
//             {
//                 PlayerMove('Scissors');
//             }
//         if(event.key === 'a')
//             {
//                 autoPlay()
//             }
//         if(event.key === 'Backspace')
//             {
//                 confirmReset.style.display = 'block'
//                 overlay.style.display = 'block'
//             }
//         // console.log(event.key)
//     })
document.body.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'r':
            PlayerMove('Rock');
            break;
        case 'p':
            PlayerMove('Paper');
            break;
        case 's':
            PlayerMove('Scissors');
            break;
        case 'a':
            autoPlay();
            break;
        case 'i':
            block.style.display = 'block'
            overlay.style.display = 'block'
            break;
        case 'Backspace':
            confirmReset.style.display = 'block';
            overlay.style.display = 'block';
            break;
        // default:
        //     console.log(event.key); // For debugging
    }
});


    

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




