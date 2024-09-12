function convertorCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    document.getElementById("results").innerHTML = fahrenheit;
    return fahrenheit;
  }
  
  function isLess(a, b) {
    let result = a < b ? true : false;
    document.getElementById("results").innerHTML = result;
    return result;
  }
  
  const increment = (number, value = 1) => {
    let result = number + value;
    document.getElementById("results").innerHTML = result;
    return result;
  }
  
  let count = 0;
        
        function cardCounter(card) {
          switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              count++;
              break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
              count--;
              break;
          }
          if (count > 0) {
            return count + ' Bet';
          } else {
            return count + ' Hold';
          }
        }
        
        let card1 = 10;
        let card2 = 'J';
        let card3 = 'Q';
        let card4 = 'K';
        let card5 = 'A';
        
        // В случае если карты нет пишем 0 
  
        document.getElementById('count').innerHTML = count;
        document.getElementById('move').innerHTML = cardCounter(card1);
        document.getElementById('count').innerHTML = count;
        document.getElementById('move').innerHTML = cardCounter(card2);
        document.getElementById('count').innerHTML = count;
        document.getElementById('move').innerHTML = cardCounter(card3);
        document.getElementById('count').innerHTML = count;
        document.getElementById('move').innerHTML = cardCounter(card4);
        document.getElementById('count').innerHTML = count;
        document.getElementById('move').innerHTML = cardCounter(card5);
  