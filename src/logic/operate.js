import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  if (operation === '-') return x.minus(y).toString();

  if (operation === '+') return x.plus(y).toString();

  if (operation === 'x') return x.mul(y).toString();

  if (operation === '÷') {
    if (numberTwo === '0') {
      total = 'Infinity';
    } else {
      total = x.div(numberTwo).toString();
    }
  }
  return total;
};

export default operate;
