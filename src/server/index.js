import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import todo from './todo';
import task from './task';

const app = express();
const server = http.createServer(app);

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

app
  .get('/api/todos', todo.get)
  .post('/api/todos', todo.add)
  .delete('/api/todos/:id', todo.remove)

  .get('/api/tasks', task.get)
  .post('/api/tasks', task.add)
  .delete('/api/tasks/:id', task.remove);

server.listen(8080, () => console.log('server started on port 8080'));
