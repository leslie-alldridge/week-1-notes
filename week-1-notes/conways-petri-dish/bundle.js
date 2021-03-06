(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
const getNeighbours = require('./getNeighbours')

let aliveNeighbours = [];

countAliveNeighbours = (cellRow, cellColumn, board) => { 
    aliveNeighbours = (getNeighbours(cellRow, cellColumn, board));

    return aliveNeighbours.filter(Boolean).length;
}

module.exports = countAliveNeighbours

},{"./getNeighbours":5}],3:[function(require,module,exports){
function createBoard (size) {

var matrix = [];
for(var i=0; i<size; i++) {
    matrix[i] = new Array(size);
    matrix[i].fill();
}
    

  //  console.log(randomx);
  //  console.log(randomx);
    

    return matrix;
}

module.exports = createBoard

},{}],4:[function(require,module,exports){
(function (process){
function displayBoard (board) {
  process.stdout.write('\x1B[2J\x1B[0f')

  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    console.log(row.map(cell => (cell) ? 'o' : '.').join(' '))
  }
  console.log()
}

module.exports = displayBoard

}).call(this,require('_process'))
},{"_process":1}],5:[function(require,module,exports){
const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

getNeighbours = (cellRow, cellColumn, board) => {
    let surroundingNeighbours = [];
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (y === 0 && x === 0){
            }             
            else if (!indicesAreOutOfBounds(cellRow + x, cellColumn + y, board)) {
            surroundingNeighbours.push(board[cellRow + x][cellColumn + y]);
            } 
        }
    }
    return surroundingNeighbours;
}

module.exports = getNeighbours

},{"./indicesAreOutOfBounds":7}],6:[function(require,module,exports){
const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 30
const refreshInteral = 80

let board = createBoard(size)

for (let y = 0; y < board.length; y++) {
  for (let j = 0; j < board.length; j++) {
    board[y][j] = (Math.random() >= 0.5)
  }
}


setInterval(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInteral)
},{"./createBoard":3,"./displayBoard":4,"./nextBoard":12}],7:[function(require,module,exports){
const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {   
    
    if (isOutOfBounds(rowIndex, array))
        return true;

    if (isOutOfBounds(columnIndex, array))
        return true

    return false;
}
module.exports = indicesAreOutOfBounds

},{"./isOutOfBounds":8}],8:[function(require,module,exports){
function isOutOfBounds (index, array) {    
    if (index < 0) return true;
    else if (index > array.length -1) return true;
        else return false
}

module.exports = isOutOfBounds

},{}],9:[function(require,module,exports){
// Any live cell with more than three live neighbors dies, as if by overpopulation.

isOverPopulated = (neighbourCount) => neighbourCount > 3 ? true : false;

module.exports = isOverPopulated

},{}],10:[function(require,module,exports){
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

isRessurectable = (neighbourCount) => neighbourCount == 3 ? true : false;

module.exports = isRessurectable

},{}],11:[function(require,module,exports){
// Any live cell with fewer than two live neighbors dies, as if by under population.

isUnderPopulated = (neighbourCount) => neighbourCount < 2 ? true : false;

module.exports = isUnderPopulated

},{}],12:[function(require,module,exports){
var nextCellState = require('./nextCellState');
var countAliveNeighbours = require('./countAliveNeighbours');
var createBoard = require('./createBoard')

function nextBoard(currentBoard) {
  var newBoard = createBoard(currentBoard.length)
  
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard.length; j++) {
      newBoard[i][j] = nextCellState(currentBoard[i][j], countAliveNeighbours(i, j, currentBoard))
    }
  }
  return newBoard;
}

module.exports = nextBoard;
},{"./countAliveNeighbours":2,"./createBoard":3,"./nextCellState":13}],13:[function(require,module,exports){
const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {

    if (isOverPopulated(neighbourCount) && cellState) {
        return false
      }
       if (isUnderPopulated(neighbourCount) && cellState) {
        return false
      }
       if (isRessurectable(neighbourCount) && !cellState) {
        return true
      }
       if (!isUnderPopulated(neighbourCount) && !isOverPopulated(neighbourCount) && cellState) {
        return true
      }

      else return false;
    }
module.exports = nextCellState

},{"./isOverPopulated":9,"./isRessurectable":10,"./isUnderPopulated":11}]},{},[6]);
