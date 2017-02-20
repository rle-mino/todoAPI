let tasks = [];
let Gid = 0;

const get = (req, res) => {
  res.send(tasks);
};

const add = (req, res) => {
  const { todoId, text } = req.body;

  if (!todoId) return res.status(400).send('todoId is required');
  if (!text) return res.status(400).send('text is required');

  const newTask = { todoId, text, id: Gid += 1 };
  tasks = [newTask, ...tasks];
  return res.send(newTask);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send('id is required');

  const toRemove = tasks.find(task => +task.id === +id);
  if (!toRemove) return res.send('tasks[id] does not exists');
  tasks = tasks.filter(task => +task.id !== +id);
  return res.send({ id });
};

export default {
  get,
  add,
  remove,
};
