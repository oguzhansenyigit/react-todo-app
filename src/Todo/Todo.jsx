import React, { useState } from "react";
import { useDispatch } from "react-redux";

import actions from "../store/actions/Actions";

function Todo({ data }) {
  const [todo, setTodo] = useState(data);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  function onCompletedHandler(e) {
    setTodo({
      ...todo,
      isCompleted: e.target.checked,
    });
  }

  function onDeleteTodoHandle() {
    dispatch(actions.deleteTodo(todo.id));
  }

  function onSetEditMode() {
    setIsEditMode(!isEditMode);
    // isEditMode = true
    // !isEditMode = false
  }

  function updateTodoTitle(e) {
    setTodo({
      ...todo,
      title:e.target.value
    })
    dispatch(actions.editTodoActions(todo));

  }

  function updateTodoDescription(e) {
    setTodo({
      ...todo,
      description:e.target.value
    })

    dispatch(actions.editTodoActions(todo));
  }

  return (
    <tr key={todo.id}>
      <th scope="row">
        <input type="checkbox" checked={todo.isCompleted} onChange={onCompletedHandler} />
      </th>
      <td>
        {isEditMode == true ? (
          <input value={todo.title} onChange={updateTodoTitle} />
        ) : todo.isCompleted === true ? (
          <del>{todo.title}</del>
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        {
          isEditMode == true ? (
            <input value={todo.description} onChange={updateTodoDescription} />
          ) : todo.isCompleted === true ? (
            <del>{todo.description}</del>
          ) : (
            <span>{todo.description}</span>
          )
        }
      </td>
      <td>
        {todo.isCompleted === true ? (
          <div className="alert alert-primary">Completed</div>
        ) : (
          <div className="alert alert-danger">Pending</div>
        )}
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={onDeleteTodoHandle}>
          Delete
        </button>
        <button className="btn btn-primary btn-sm" onClick={onSetEditMode}>
          {isEditMode === true ? "Quit Edit" : "Edit"}
        </button>
      </td>
    </tr>
  );
}

export default Todo;
