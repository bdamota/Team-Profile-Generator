const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '45', 'dave@dave.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual('45');
    expect(employee.email).toEqual('dave@dave.com');
  });


  test("gets employee's name", () => {
    const employee = new Employee('Dave', '45', 'dave@dave.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  });

  test("gets employee's id", () => {
    const employee = new Employee('Dave', '45', 'dave@dave.com');

    expect(employee.getID()).toEqual(expect.stringContaining(employee.id));
  });

  test("gets employee's email", () => {
    const employee = new Employee('Dave', '45', 'dave@dave.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
  });

  test("gets employee's role", () => {
    const employee = new Employee('Dave', '45', 'dave@dave.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });