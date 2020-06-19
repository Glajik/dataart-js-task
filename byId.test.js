const byId = require('./byId.js').default;

it('Should work', () => {
  const users = [
    {
      id: 'as23',
      nick: 'Octopus',
      firstName: 'John',
      LastName: 'Dou'
    }, {
      id: 'as25',
      nick: 'Star',
      firstName: 'Andy',
      LastName: 'Lee'
    }, {
      id: 'as77',
      nick: 'Wally',
      firstName: 'Liza',
      LastName: 'Corty'
    }
  ];

  expect(byId(users)).toEqual({
    as23: {
      id: 'as23',
      nick: 'Octopus',
      firstName: 'John',
      LastName: 'Dou'
    },
    as25: {
      id: 'as25',
      nick: 'Star',
      firstName: 'Andy',
      LastName: 'Lee'
    },
    as77: {
      id: 'as77',
      nick: 'Wally',
      firstName: 'Liza',
      LastName: 'Corty'
    }
  });
});

it('Should work too', () => {
  expect(byId([])).toEqual({});
  expect(byId(0)).toEqual({});
  expect(byId(1)).toEqual({});
  expect(byId('abc')).toEqual({});
  expect(byId()).toEqual({});
  expect(byId(null)).toEqual({});
});