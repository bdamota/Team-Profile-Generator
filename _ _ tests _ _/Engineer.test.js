const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer ('Jane', '60', 'janegit', 'jane@jane.com');

    expect(engineer.name).toBe('Jane');
    expect(engineer.id).toEqual('60');
    expect(engineer.github).toEqual('janegit');
    expect(engineer.email).toEqual('jane@jane.com');
  });


test("gets engineer github username", () => {
    const engineer = new Engineer('Jane', '60', 'janegit', 'jane@jane.com');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github));
  });

 
test("gets engineer role", () => {
    const engineer = new Engineer('Jane', '60', 'janegit', 'jane@jane.com');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
  });