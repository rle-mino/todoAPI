let todos = [];
let Gid = 0;

const add = (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send('name is required');

  const newTodo = { name, id: Gid += 1 };
  todos = [newTodo, ...todos];
  return res.send(newTodo);
};

const get = (req, res) => {
  res.send(todos);
};

const remove = (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).send('id is required');
  const toRemove = todos.find(todo => +todo.id === +id);

  if (!toRemove) return res.status(500).send('todos[id] does not exists');
  todos = todos.filter(todo => +todo.id !== +id);
  return res.send({ id });
};

export default {
  get,
  add,
  remove,
};
