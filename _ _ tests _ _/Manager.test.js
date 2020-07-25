const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual('25');
    expect(manager.office).toEqual('2');
    expect(manager.email).toEqual('john@john.com');
  });


  test("gets manager's office number", () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getOffice()).toEqual(expect.stringContaining(manager.office));
  });

 
  test("gets manager's role", () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });