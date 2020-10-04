import operate from './operate';

const calculate = (calculator, buttonName) => {
  const operations = ['+', '-', 'x', '÷'];
  const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let { total, next, operation } = calculator;

  if (buttonName === '+/-') {
    if (next) {
      next = +next * -1;
    }
    total = +total * -1;
  }

  if (buttonName === '%') {
    if (next) {
      next *= 0.01;
    } else {
      total *= 0.01;
    }
  }

  if (buttonName === '=') {
    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    if(next === null) {
        operation = buttonName;
    }
  }

  if (buttonName === '.') {
    if (next && !next.toString().contains('.')) {
      next = `${next.toString()}.`;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
   
  if (numbers.includes(buttonName)) {
      if(operation === null) {
          total = buttonName
      }else{
          next = buttonName
      }
  }

  return { total, next, operation };
};

export default calculate;
