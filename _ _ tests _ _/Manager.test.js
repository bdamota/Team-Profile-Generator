const Manager = require('../lib/Manager');

test('creates an employee object', () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual('25');
    expect(manager.office).toEqual('2');
    expect(manager.email).toEqual('john@john.com');
  });


  test("gets manager's name", () => {
    const manager= new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
  });

  test("gets manager's id", () => {
    const manager= new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getID()).toEqual(expect.stringContaining(manager.id));
  });

  test("gets manager's office number", () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.office));
  });

  test("gets manager's email", () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
  });

  test("gets manager's role", () => {
    const manager = new Manager('John', '25', '2', 'john@john.com');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });