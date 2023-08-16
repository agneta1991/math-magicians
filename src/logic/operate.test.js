import operate from './operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });
});

describe('Subtract', () => {
  test('2-3', () => {
    const result = operate(2, 3, '-');
    expect(result).toBe('-1');
  });

  test('0-5', () => {
    const result = operate(0, 5, '-');
    expect(result).toBe('-5');
  });

  test('12-0', () => {
    const result = operate(12, 0, '-');
    expect(result).toBe('12');
  });
});

describe('Multiply', () => {
  test('2*3', () => {
    const result = operate(2, 3, '*');
    expect(result).toBe('6');
  });

  test('0*5', () => {
    const result = operate(0, 5, '*');
    expect(result).toBe('0');
  });

  test('12*0', () => {
    const result = operate(12, 0, '*');
    expect(result).toBe('0');
  });
});

describe('Divide', () => {
  test('6÷3', () => {
    const result = operate(6, 3, '÷');
    expect(result).toBe('2');
  });

  test('0÷5', () => {
    const result = operate(0, 5, '÷');
    expect(result).toBe('0');
  });

  test('12÷0', () => {
    const result = operate(12, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});

describe('Remainder', () => {
  test('7%3', () => {
    const result = operate(7, 3, '%');
    expect(result).toBe('1');
  });

  test('0%5', () => {
    const result = operate(0, 5, '%');
    expect(result).toBe('0');
  });

  test('12%0', () => {
    const result = operate(12, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('Unknown', () => {
  test('7/3', () => {
    expect(() => {
      operate(7, 3, '/');
    }).toThrow();
  });
});
