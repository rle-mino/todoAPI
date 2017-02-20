class Tasks {
  constructor() {
    this.tasks = [];
    this.Gid = 0;
  }

  get = (req, res) => {
    res.send(this.tasks);
  }

  add = (req, res) => {
    const { todoId, text } = req.body;

    if (!todoId) return res.status(400).send('todoId is required');
    if (!text) return res.status(400).send('text is required');

    const newTask = { todoId, text, id: this.Gid += 1 };
    this.tasks = [newTask, ...this.tasks];
    return res.send(newTask);
  }

  remove = (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send('id is required');

    const toRemove = this.tasks.find(task => +task.id === +id);
    if (!toRemove) return res.send('tasks[id] does not exists');
    this.tasks = this.tasks.filter(task => +task.id !== +id);
    return res.send({ id });
  }
}

export default new Tasks();
