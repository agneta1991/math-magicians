import calculate from './calculate';
import operate from './operate';

jest.mock('./operate', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('calculate function', () => {
  beforeEach(() => {
    operate.mockReset();
  });

  it('should reset calculator data when buttonName is "AC"', () => {
    const result = calculate({ total: '2', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
