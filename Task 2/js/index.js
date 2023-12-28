window.x = 1;
const context = { x: 2 };

function testThis(y) {
  console.log(`x=${this.x}, y=${y}`);
}

testThis(100);

function bind(func, context) {
  return function (...args) {
    return func.apply(context, args);
  };
}

const boundFunction = bind(testThis, context);
console.log(boundFunction(100));


const Robot = function(name) {
    this.name = name;
  };
  
  function add(op1, op2) {
    this.name = this.name || 'Human';
    return this.name + ' can count to ' + (op1 + op2);
  }
  
  const voltron = new Robot('Voltron');
  

  const boundAdd = bind(add, voltron);
  console.log(boundAdd(3, 4));
  

  console.log(add.call(voltron, 5, 6)); 
  

  console.log(add.apply(voltron, [7, 8]));