import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import actions from '../store/actions/Actions'
import Todo from './Todo';

function TodosList() {
  // state => state.todos (USESELECTOR)
  // 1.state -> takma isimdir. Tüm redux statelerini bir obje şeklinde kendisine eşitler
  // 2.state -> takma isim içinden veriyi almak için kullanılır.
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  const [allTodos, setAllTodos] = useState(todos);

  // useEffect(() => {
  //   // useEffect sonunda array varsa bir defa çalışır
  //   // array yoksa sürekli döngü şeklinde çalışır
  //   // array içinde bir veri varsa, o veri değiştiğinde(güncellendiğinde) çalışır
  //   setAllTodos(todos);
  // }, [todos]);



  function onClearTodosHandle() {
    dispatch(actions.deleteAllTodos());
  }

  function toggleAllTodos(event) { // Event js'nin otomatik gönderdiği olay yakalama objesidir.

    const isChecked = event.target.checked;

    dispatch(actions.toggleAllTodos(isChecked));
  }

  return (
    <div className="mt-5">
      <button className="btn btn-danger btn-md" onClick={onClearTodosHandle}>Clear Todos</button>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">
              <input type='checkbox' onChange={toggleAllTodos} />
            </th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo,index) => (
            <Todo key={index} data={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodosList;
