import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

function Container(props: any) {
  type TodoInfo = {
    myKey: string;
    title: string;
  };

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  const createTodo = () => {
    const uuid = uuidv4();

    console.log(uuid);
    console.log(todos);
    setTodos([...todos, { title: value, myKey: uuid }]);
    setValue('');
  };

  const filterTodo = (key: string) => {
    setTodos(todos.filter((todo) => todo.myKey !== key));
  };

  return (
    <div>
      <h1>할일 목록</h1>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.myKey}
            myKey={todo.myKey}
            title={todo.title}
            filterTodo={filterTodo}
          />
        );
      })}

      <div>
        <input
          type="text"
          placeholder="해야 할 일을 입력하세요."
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button type="button" onClick={() => createTodo()}>
          입력
        </button>
      </div>
    </div>
  );
}

export default Container;
