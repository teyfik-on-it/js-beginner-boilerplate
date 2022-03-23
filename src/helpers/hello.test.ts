import hello from './hello';

describe('hello', () => {
  let message: Parameters<typeof process.stdout.write>[0];

  it('should say hello world', () => {
    jest.spyOn(process.stdout, 'write').mockImplementation((arg) => {
      message = arg;

      return true;
    });

    hello();
    expect(message).toBe('Hello world!\n');
  });
});
