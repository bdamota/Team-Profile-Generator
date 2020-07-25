const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern ('Anne', '80', 'USC', 'anne@anne.com');

    expect(intern.name).toBe('Anne');
    expect(intern.id).toEqual('80');
    expect(intern.school).toEqual('USC');
    expect(intern.email).toEqual('anne@anne.com');
  });


  test("gets intern school", () => {
    const intern = new Intern('Anne', '80', 'USC', 'anne@anne.com');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
  });

 
  test("gets intern role", () => {
    const intern= new Intern('Anne', '80', 'USC', 'anne@anne.com');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
  });