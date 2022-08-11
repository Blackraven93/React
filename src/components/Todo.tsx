import React from 'react';

type IFilterFunction = (key: string) => void;

type ITodo = {
  myKey: string;
  title: string;
  filterTodo: IFilterFunction;
};

// TODO: 함수 넘기기 오류 수정
function Todo({ myKey, title, filterTodo }: ITodo) {
  return (
    <div>
      <input type="checkbox" name="check" />
      <span>{title}</span>
      <button type="button" onClick={() => filterTodo(myKey)}>
        X
      </button>
    </div>
  );
}

export default Todo;
