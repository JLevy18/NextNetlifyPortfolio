import React, { useState, useEffect, useRef } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Card from './MemoryGame/Card';

function Skills() {
  // ***************
  //   Memory Game
  // ***************

  // Cards (Skills on front)

  const cards = require('cardList.json');

  const [cardEls, setCardEls] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState([]);

  const resetMemoryGame = () => {

    // Array of Indicies
    let arr = []
    for(var i = 0; i < cards.length; i++){
      arr[i] = i;
      cardEls[i] = document.getElementById(arr[i]);
    }

    // Shuffle indicies (Fisher-Yates)

    let currentIndex = arr.length,  randomIndex;
    
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    // Set colors to shuffled indicies
    
    cardEls[arr[0]].lastChild.firstChild.id = 'red';
    cardEls[arr[1]].lastChild.firstChild.id = 'red';
    cardEls[arr[2]].lastChild.firstChild.id = 'orange';
    cardEls[arr[3]].lastChild.firstChild.id = 'orange';
    cardEls[arr[4]].lastChild.firstChild.id = 'yellow';
    cardEls[arr[5]].lastChild.firstChild.id = 'yellow';
    cardEls[arr[6]].lastChild.firstChild.id = 'green';
    cardEls[arr[7]].lastChild.firstChild.id = 'green';
    cardEls[arr[8]].lastChild.firstChild.id = 'blue';
    cardEls[arr[9]].lastChild.firstChild.id = 'blue';
    cardEls[arr[10]].lastChild.firstChild.id = 'purple';
    cardEls[arr[11]].lastChild.firstChild.id = 'purple';

    setCardEls(cardEls);
  };

  const checkGameOver = () => {
    //Game over
    if(clearedCards.length === 5){

      setTimeout(() => {

        for(var i = 0; i < cards.length; i++){
          cardEls[i].classList.add('gameover');
          cardEls[i].classList.add('reset');
        }
        setTimeout(() => {

          for(var i = 0; i < cards.length; i++){
            cardEls[i].classList.remove('gameover');
          }

          setTimeout(() => {

            for(var i = 0; i < cards.length; i++){
              cardEls[i].classList.remove('found');
              cardEls[i].classList.remove('reset');
              resetMemoryGame();
              setClearedCards([]);
            }

          }, 1500);

        }, 1400);

      }, 0);
    }
  }


  const evaluate = () => {

    const [first,second] = openCards;

    if(first.lastChild.firstChild.id === second.lastChild.firstChild.id){
      console.log("match")
      setClearedCards(clearedCards.concat([first.lastChild.firstChild.id]))
      first.classList.add('found');
      second.classList.add('found');
    }

    openCards[0].classList.remove('open');
    openCards[1].classList.remove('open');
    setOpenCards([]);

    checkGameOver()

  }

  const handleClick = (e) => {
    // Identify card
    const card = e.target;
    while(!card.className.includes('iconWrapper')){
      card = card.parentElement;
    }


    if(!isFlipped(card) && !isInactive(card)){
      if(openCards.length === 1){
        setOpenCards((prev) => [...prev, card])
        card.classList.add('open')

      } else if (openCards.length === 0){

        card.classList.add('open')    
        setOpenCards([card]);

      }
    }

  };
  
  const isFlipped = (card) => {
    return openCards.includes(card);
  }

  const isInactive = (card) => {
    return clearedCards.includes(card.lastChild.firstChild.id)
  }


  //Start Memory Game
  useEffect(() => {
    window.addEventListener('load', resetMemoryGame())
  }, []);

  useEffect(() => {
    if(openCards.length === 2){
      setTimeout(evaluate, 500);
    }

  }, [openCards]);


  return (
    <div id='skills'>
      <div className='skillBrief'>
        <div className='card'>
          <div className='title'>
            <h1><FaRegLightbulb size={32} style={{paddingRight: 10}}/>Always Learning</h1>
          </div>
          <div className='content'>
            <p>When I was in high school one of my technical teachers told me something along the lines of: <br/><br/><i><b>"when one understands programming logic and design one can learn any new language in weeks."</b></i><br/><br/>In order to remain competitive, I am constantly sharpening my skills and learning new frameworks.</p>
          </div>
        </div>

        <div className='card game'>
         <div className='content'>
            <p><i><b>Click</b> the skill cards to play <b>Memory Game</b></i></p>
          </div>
        </div>
      </div>
      <div className='skillSec'>
          <div className='skillGrid'>
            {cards.map((card,index) => {
              return(
                <Card
                  key={index}
                  card={card}
                  index={index}
                  onClick={handleClick.bind(this)}
                />
              )
            })}

          </div>
      </div>
    </div>
  )
}

export default Skills
