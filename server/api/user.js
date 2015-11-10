const fakeData = [
  {
    username: 'bob12',
    name: 'Bob Jake',
    id: 1
  },
  {
    username: 'wigs87',
    name: 'Jack Johnson',
    id: 2
  }
]

export default [
  {
    method: 'GET',
    path: '/api/users',
    handler (req, res) {
      res(fakeData);
    }
  }, {
    method: 'GET',
    path: '/api/users/{id}',
    handler(req, res) {
      fakeData.map((user) => {
        if (user.id.toString() === req.params.id) {
          res(user);
        }
      });
    }
  }
]
