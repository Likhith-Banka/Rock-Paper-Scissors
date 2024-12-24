

let score = JSON.parse(localStorage.getItem('score'));
        if(!score){
            score = {
              wins : 0,
              losses : 0,
              ties : 0

            };
        }
        updatedScoreElement();
        function computerchoice(){
            const num = Math.random();
            let comp='';
            if(num>=0 && num<(1/3)) comp='Rock';
            else if(num>=(1/3) && num <(2/3)) comp='Paper';
            else comp = 'Scissors';
            return comp;
        }
        function updatedScoreElement(){
            document.querySelector('.js-score').innerHTML =
            `Wins : ${score.wins}   Losses : ${score.losses}  Ties : ${score.ties}`;
        }

    let isAutoPlaying = false;
    let intervalId;

        function autoPlay(){
    const autoPlayElement = document.querySelector('.js-auto-play-button');
    if(autoPlayElement.innerHTML === 'Auto Play'){
         autoPlayElement.innerHTML = 'Stop Play'
    }
    else{
        autoPlayElement.innerHTML = 'Auto Play'
    }
        if(!isAutoPlaying){
            intervalId = setInterval(() => {
                const playerMove = computerchoice();
                playGame(playerMove);
                },1000);
            isAutoPlaying = true;
        }
        else{
           clearInterval(intervalId);
           isAutoPlaying = false;
         } 
        }

    document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    });
    document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    });
    document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    });

    document.body.addEventListener('keydown', (event)=> {
        if(event.key === 'p' || event.key === 'P') playGame('Paper');
        if(event.key === 'r' || event.key === 'R') playGame('Rock');
        if(event.key === 's' || event.key === 'S') playGame('Scissors');
    });
function playGame(playerMove){
     let computerMove = computerchoice();
     let result='';
          if(playerMove==='Rock'){
            
        if(computerMove==='Rock'){
           result = 'Its a Tie';
        }
        else if(computerMove==='Paper'){
            result = 'You Lose';
        }
        else if(computerMove==='Scissors'){
            result = 'You Win!';
        }
    }

        if(playerMove==='Paper'){
           
        if(computerMove==='Paper'){
           result = 'Its a Tie';
        }
        else if(computerMove==='Scissors'){
            result = 'You Lose';
        }
        else if(computerMove==='Rock'){
            result = 'You Win!';
        }

        }
    if(playerMove=='Scissors'){
        if(computerMove==='Scissors'){
           result = 'Its a Tie';
        }
        else if(computerMove==='Rock'){
            result = 'You Lose';
        }
        else if(computerMove==='Paper'){
            result = 'You Win!';
        }
    }
    if(result==='You Win!') score.wins += 1;
    else if(result==='You Lose') score.losses += 1;
    else score.ties += 1;
    localStorage.setItem('score',JSON.stringify(score));
     updatedScoreElement();
     document.querySelector('.js-result').innerHTML = result;
     document.querySelector('.js-moves').innerHTML =  `You <img class="move-icon" src="images/${playerMove}-emoji.png">
        <img class="move-icon" src="images/${computerMove}-emoji.png">
        Computer`;
}

