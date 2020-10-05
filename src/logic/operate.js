import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
// eslint-disable-next-line no-bitwise
  if (numberOne === '0' && operation === 'x' | '÷') return 0;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  if (operation === '-') return x.minus(y);

  if (operation === '+') return x.plus(y);

  if (operation === 'x') return x.mul(y);

  return x.div(y);
};

export default operate;
