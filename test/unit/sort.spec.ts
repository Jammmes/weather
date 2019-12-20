import { getNewSortedCities } from '../../src/utils/sort';

const mockSities = [
  {
    id: '111',
    name: 'Kiev',
    temperature: 25,
    position: 0,
    isDeleted: false,
    icon: 'string',
  },
  {
    id: '222',
    name: 'Saratov',
    temperature: 25,
    position: 15,
    isDeleted: false,
    icon: 'string',
  },
  {
    id: '333',
    name: 'Moscov',
    temperature: 25,
    position: 27,
    isDeleted: false,
    icon: 'string',
  },
  {
    id: '444',
    name: 'Perm',
    temperature: 25,
    position: 27,
    isDeleted: false,
    icon: 'string',
  },
];

describe('getNewSortedArray test', () => {

  it('move UP - shoud return 111 up', () => {
    const result = getNewSortedCities(mockSities, '111', 'UP');
    expect(result[0].id).toBe('111');
    expect(result[1].id).toBe('222');
    expect(result[2].id).toBe('333');
    expect(result[3].id).toBe('444');
    expect(result.length).toBe(4);
  });

  it('move UP - shoud move 222 up', () => {
    const result = getNewSortedCities(mockSities, '222', 'UP');
    expect(result[0].id).toBe('222');
    expect(result[1].id).toBe('111');
    expect(result[2].id).toBe('333');
    expect(result[3].id).toBe('444');
    expect(result.length).toBe(4);
  });

  it('move UP - shoud move 444 up', () => {
    const result = getNewSortedCities(mockSities, '444', 'UP');
    expect(result[0].id).toBe('111');
    expect(result[1].id).toBe('222');
    expect(result[2].id).toBe('444');
    expect(result[3].id).toBe('333');
    expect(result.length).toBe(4);
  });

  it('move DOWN - shoud move 111 down', () => {
    const result = getNewSortedCities(mockSities, '111', 'DOWN');
    expect(result[0].id).toBe('222');
    expect(result[1].id).toBe('111');
    expect(result[2].id).toBe('333');
    expect(result[3].id).toBe('444');
    expect(result.length).toBe(4);
  });

  it('move DOWN - shoud move 222 down', () => {
    const result = getNewSortedCities(mockSities, '222', 'DOWN');
    expect(result[0].id).toBe('111');
    expect(result[1].id).toBe('333');
    expect(result[2].id).toBe('222');
    expect(result[3].id).toBe('444');
    expect(result.length).toBe(4);
  });

  it('move DOWN - shoud move 333 down', () => {
    const result = getNewSortedCities(mockSities, '333', 'DOWN');
    expect(result[0].id).toBe('111');
    expect(result[1].id).toBe('222');
    expect(result[2].id).toBe('444');
    expect(result[3].id).toBe('333');
    expect(result.length).toBe(4);
  });

  it('move DOWN - shoud move 444 down', () => {
    const result = getNewSortedCities(mockSities, '444', 'DOWN');
    expect(result[0].id).toBe('111');
    expect(result[1].id).toBe('222');
    expect(result[2].id).toBe('333');
    expect(result[3].id).toBe('444');
    expect(result.length).toBe(4);
  });

});
