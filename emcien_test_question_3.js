// "Ant-Gridiron" to Question 3 __________________________________________________

// The grid is an array. Each square is another array with a boolean (the 'ant')
// and another array which contain strings which are the invalid moves based on the index of the square.
var grid = [
              [ant = false, invalidMoves = ['cantMoveWest', 'cantMoveNorth']], [ ant = false, invalidMoves = ['cantMoveNorth']], [ant = false, invalidMoves = ['cantMoveNorth']], [ant = false, invalidMoves = ['cantMoveNorth']], [ ant = false, invalidMoves = ['cantMoveNorth', 'cantMoveEast']],
              [ ant = false, invalidMoves = ['cantMoveWest']], [ ant = false, invalidMoves = []], [ant = false, invalidMoves = []], [ ant = false, invalidMoves = []], [ ant = false, invalidMoves = ['cantMoveEast']],
              [ ant = false, invalidMoves = ['cantMoveWest']], [ ant = false, invalidMoves = []], [ ant = true, invalidMoves = []], [ ant = false, invalidMoves = []], [ ant = false, invalidMoves = ['cantMoveEast']],
              [ ant = false, invalidMoves = ['cantMoveWest']], [ ant = false, invalidMoves = []], [ ant = false, invalidMoves = []], [ ant = false, invalidMoves = []], [ ant = false, invalidMoves = ['cantMoveEast']],
              [ ant = false, invalidMoves = ['cantMoveWest', 'cantMoveSouth']], [ ant = false, invalidMoves = ['cantMoveSouth']], [ ant = false, invalidMoves = ['cantMoveSouth']], [ ant = false, invalidMoves = ['cantMoveSouth']], [ ant = false, invalidMoves = ['cantMoveEast', 'cantMoveSouth']]
           ];

var seconds = 0;
// antIndex starts in the middle (12)
var antIndex = 12;
var antSquare = grid[antIndex];


// equal probability to move in 4 directions or stay still
function moveProbability(){
  var num = Math.random();
  console.log(num);
  if(num <= 0.2) { console.log('try to move north'); return moveNorth(); }
  else if(num <= 0.4) { console.log('try to move south'); return moveSouth(); }
  else if(num <= 0.6) { console.log('try to move east'); return moveEast(); }
  else if(num <= 0.8) { console.log('try to move west'); return moveWest(); }
  else { console.log('stays still'); return stayStill(); }
}

// checks for ant=true, changes ant=false, changes antIndex based on moveProbability
// changes square's ant boolean at antIndex to true, adds a second
function move() {
  antSquare[0] = false
  moveProbability();
  seconds++;
  console.log('seconds', seconds);
}

// checks for corresponding invalidMove, changes antIndex - 5
function moveNorth() {
  antSquare = grid[antIndex];
    console.log('invalidMoves', antSquare[1]);
    if (antSquare[1].includes('cantMoveNorth')) {
      stayStill();
      console.log('cannot move north, stays still');
    } else {
      antIndex -= 5;
      console.log('moves north to antIndex = ', antIndex);
      antSquare[0] = true;
    }
}

// checks for corresponding invalidMove, changes antIndex + 5
function moveSouth() {
  antSquare = grid[antIndex];
    console.log('invalidMoves', antSquare[1]);
    if (antSquare[1].includes('cantMoveSouth')) {
      stayStill();
      console.log('cannot move south, stays still');
    } else {
      antIndex += 5;
      console.log('moves south to antIndex = ', antIndex);
      antSquare[0] = true;
    }
}

// checks for corresponding invalidMove, changes antIndex +1
function moveEast() {
  antSquare = grid[antIndex];
    console.log('invalidMoves', antSquare[1]);
    if (antSquare[1].includes('cantMoveEast')) {
      stayStill();
      console.log('cannot move east, stays still');
    } else {
      antIndex += 1;
      console.log('moves east to antIndex = ', antIndex);
      antSquare[0] = true;
    }
}

// checks for corresponding invalidMove, changes antIndex - 1
function moveWest() {
  antSquare = grid[antIndex];
    console.log('invalidMoves', antSquare[1]);
    if (antSquare[1].includes('cantMoveWest')) {
      stayStill();
      console.log('cannot move west, stays still')
    } else {
      antIndex -= 1;
      console.log('moves west to antIndex = ', antIndex);
      antSquare[0] = true;
    }
}

function stayStill() {
  // do nothing
}

// 1
function antMovesForNumSecs(num) {
  while(seconds < num) {
    move();
  }
  seconds = 0;
}

// My Answers to Quesiton 3 __________________________________________________

// What is the probability that the ant is on the center square after 15 seconds?

function testCenterSquareXTimes(x, y) {
  var testCount = 0;
  var desirableOutcomes = 0;
  while(testCount < x) {
    antMovesForNumSecs(y);
    testCount++;
    if (antIndex === 12) {
      desirableOutcomes++;
    }
    console.log('testCount', testCount);
  }
  console.log('desirableOutcomes', desirableOutcomes);
  console.log('The empirical probability of landing on the center square when tested ' + x + ' times is ' + desirableOutcomes/x);
}

testCenterSquareXTimes(100, 15);

// => I got .06 a few times, but has been anywhere around 1% - .5%

// What is the probability that the ant is on one of the outermost squares after 1 hour?

edgeSquareIndexes = [1 , 2 , 3 , 4 , 5 , 6 , 10 , 11 , 15 , 16 , 21 , 22 , 23 , 24 , 25];

function testEdgeOfSquares(x, y) {
  var testCount = 0;
  var desirableOutcomes = 0;
  while(testCount < x) {
    antMovesForNumSecs(y);
    testCount++;
    for (i=0; i < edgeSquareIndexes.length; i++) {
      if (antIndex === i) {
      desirableOutcomes++;
      }
    }
    console.log('testCount', testCount);
    console.log('desirableOutcomes', desirableOutcomes);
  }
  console.log('The empirical probability of landing on the edge when tested ' + x + ' times is ' + desirableOutcomes/x);
}


testEdgeOfSquares(10, 3600);



