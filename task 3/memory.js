const cardsArray = [
    {
        name: 'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
     {
        name: 'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
     {
        name: 'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
     {
        name: 'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
     {
        name: 'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
     {
        name: 'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name: 'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
     {
        name: 'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
     {
        name: 'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
     {
        name: 'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
     {
        name: 'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
     {
        name: 'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
]

let flippedcards = [];
let matchedParis = 0;
shuffleCards();
const gameBoard = document.getElementById('gameBoard')
displayCards();

function shuffleCards() {
    for(let  i = cardsArray.length - 1; i >= 0; i--){
         const randIndex = Math.floor(Math.random()*(i+1));
          [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
         card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}

function flipCard() {
    if (flippedcards.length < 2 && this.classList.contains('active') && flippedcards[0] !== this) {
        let cardId = this.getAttribute('id');
        flippedcards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        if (flippedcards.length == 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}


function checkMatch() {
    const card1id = flippedcards[0].getAttribute('id');
    const card2id = flippedcards[1].getAttribute('id');
    if(cardsArray[card1id].name === cardsArray[card2id].name) {
        flippedcards[0].style.border = 'none';
        flippedcards[0].style.backgroundColor = '#f5e8ba'
        flippedcards[0].innerHTML = '';
        flippedcards[0].classList.remove('active');
        flippedcards[1].style.border = 'none';
        flippedcards[1].style.backgroundColor = '#f5e8ba'
        flippedcards[1].innerHTML = '';
        flippedcards[1].classList.remove('active');
        matchedParis++;
        checkGameOver();
    }
    else {
         flippedcards[0].innerHTML = '';
         flippedcards[0].classList.add('cardback');
         flippedcards[1].innerHTML = '';
         flippedcards[1].classList.add('cardback');
    }
    flippedcards = [];
}

function checkGameOver() {
    if (matchedParis === cardsArray.length / 2) {
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild);
        }

        gameBoard.innerHTML = '<h2 class="celebrate">You Won!</h2>';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');

        const winSound = new Audio('path-to-your-sound/win-sound.mp3');
        winSound.play();

        document.body.style.transition = "background-color 2s";
        document.body.style.backgroundColor = "#ffefd5";

        launchConfetti();
        startFireworks();
        setTimeout(resetGame, 3000);
    }
}



function resetGame() {
    gameBoard.innerHTML = '';
    gameBoard.classList.remove('won');
    gameBoard.classList.add('game');
    flippedcards = [];
    matchedParis = 0;

    shuffleCards();
    displayCards();

    document.body.style.backgroundColor = "#f5e8ba";
}


function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 160,
            origin: { y: 0.7 }
        });
    }, 500);
}


function startFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.setAttribute('id', 'fireworks');
    document.body.appendChild(fireworksContainer);

    for (let i = 0; i < 5; i++) {
        let firework = document.createElement('div');
        firework.classList.add('firework');
        fireworksContainer.appendChild(firework);
        animateFirework(firework);
    }

    setTimeout(() => {
        fireworksContainer.remove();
    }, 4000);
}

function animateFirework(firework) {
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.animation = 'firework-explode 1s ease-out forwards';
}
