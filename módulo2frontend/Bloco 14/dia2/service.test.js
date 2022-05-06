let service = require('./service');

describe('Testes da função de nṕumero aleatório' , () => {
  test('exercício 1', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })

  test('exercício 2', () => {
    service.randomNumber.mockReset();
    service.randomNumber.mockImplementation((a,b) => a/b);
    
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })

  test('exercício 3', () => {
    service.randomNumber.mockReset();
    service.randomNumber.mockImplementation((a,b,c) => a*b*c);
    
    expect(service.randomNumber(1, 3, 2)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);

    service.randomNumber.mockReset();
    service.randomNumber.mockImplementation((a) => a*2);
    
    expect(service.randomNumber(3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })

  test('exercício 4', () => {
    const strCase = jest
      .spyOn(service, 'capsStr')
      .mockImplementation((str) => str.toLowerCase());
    
    expect(strCase('BR')).toBe('br');
    expect(strCase).toHaveBeenCalled();
    expect(strCase).toHaveBeenCalledTimes(1);

    service.capsStr.mockRestore();

    expect(service.capsStr('br')).toBe('BR');

  })
})
describe('exercício 5', () => {
  service.requestDogs = jest.fn();
  afterEach(service.requestDogs.mockReset);
  test('testa se o request tem sucesso', async () => {
    service.requestDogs.mockResolvedValue('request sucess');

    await expect(service.requestDogs()).resolves.toBe('request sucess');
    expect(service.requestDogs).toHaveBeenCalled();
    expect(service.requestDogs).toHaveBeenCalledTimes(1)
  })
  test('testa se o request falha', async () => {
    service.requestDogs.mockRejectedValue('request failed');

    await expect(service.requestDogs()).rejects.toMatch('request failed');
    expect(service.requestDogs).toHaveBeenCalled();
    expect(service.requestDogs).toHaveBeenCalledTimes(1)
  })
})