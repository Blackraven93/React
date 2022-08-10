import React, { useState } from 'react';

type IProps = {
  title: string;
};

function Todo({ title }: IProps) {
  return (
    <div>
      <input type="checkbox" name="check" />
      <span>{title}</span>
      <button type="button">X</button>
    </div>
  );
}

export default Todo;
