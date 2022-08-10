import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

function Container(props: any) {
  const [value, setValue] = useState('');
  const [todos, setTodo] = useState<string[]>([]);

  const createTodoComponent = () => {
    setTodo([...todos, value]);
    setValue('');
  };
  return (
    <div>
      <h1>할일 목록</h1>
      {todos.map((todo) => {
        return <Todo key={uuidv4()} title={todo} />;
      })}
      
      <div>
        <input
          type="text"
          placeholder="해야 할 일을 입력하세요."
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button type="button" onClick={() => createTodoComponent()}>
          입력
        </button>
      </div>
    </div>
  );
}

export default Container;
