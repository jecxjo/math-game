const MathOps = { }

MathOps.doAdd = (num1, num2) => {
  return num1 + num2
}

MathOps.doSub = (num1, num2) => {
  return num1 - num2
}

MathOps.doMult = (num1, num2) => {
  return num1 * num2
}

MathOps.doMath = (num1, op1, num2, op2, num3) => {
  let mathOp1, mathOp2

  switch(op1) {
    case '+':
      mathOp1 = MathOps.doAdd
      break
    case '-':
      mathOp1 = MathOps.doSub
      break
    case '*':
      mathOp1 = MathOps.doMult
      break
  }

  switch(op2) {
    case '+':
      mathOp2 = MathOps.doAdd
      break
    case '-':
      mathOp2 = MathOps.doSub
      break
    case '*':
      mathOp2 = MathOps.doMult
      break
  }

  if (op2 === '*') {
    return mathOp1(num1, mathOp2(num2, num3))
  } else {
    return mathOp2(mathOp1(num1, num2), num3)
  }
}

export default MathOps;
