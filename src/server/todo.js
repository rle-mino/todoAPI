
class Todos {

  todos = [];
  Gid = 0;

  add = (req, res) => {
    const { label } = req.body;

    if (!label) return res.status(400).send({ details: 'name is required' });

    const newTodo = { label, id: this.Gid += 1 };
    this.todos = [newTodo, ...this.todos];
    return res.send(newTodo);
  }

  get = (req, res) => {
    res.send(this.todos);
  }

  remove = (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send({ details: 'id is required' });
    const toRemove = this.todos.find(todo => +todo.id === +id);

    if (!toRemove) return res.status(500).send({ details: 'todos[id] does not exists' });
    this.todos = this.todos.filter(todo => +todo.id !== +id);
    return res.send({ id });
  }
}

export default new Todos();
