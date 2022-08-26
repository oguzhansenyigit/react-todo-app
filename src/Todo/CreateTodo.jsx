import {useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import Actions from '../store/actions/Actions';
function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function onCreateTodoHandle(event) {
    event.preventDefault(); // Form submit edildiğinde sayfanın yenilenmesini engeller

    dispatch(Actions.addTodoActions({ // Redux actions fırlatmak için kullanılan özel hooktur.
      id: Math.floor(Math.random() * 100000), // Her todo için unique rastgele bir id tanımlar
      title,
      description,
      isSelected:false,
      isCompleted:false
    }))

  }
  function onSetDescription(event) {
    // event => javascript tarafından otomatik parametre gönderilir.
    // İçerisindeki target.value değeri input içindeki değeri bize verir.
    const inputValue = event.target.value;
    setDescription(inputValue);
  }
  function onSetTitle(event) {
    const inputValue = event.target.value;
    setTitle(inputValue);
  }
  return (
    <div className="container justify-content-center row">
      <div className="col-6">
        <h3>Todo Application</h3>
        <div className="createTodoElement">
          <form onSubmit={onCreateTodoHandle}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                onChange={onSetTitle}
                value={title}
                className="form-control"
                required
                autoFocus
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                value={description}
                onChange={onSetDescription}
                required
                type="text"
                className="form-control"
              />
            </div>
            <button className="btn btn-success btn-md" type="submit">
              Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
