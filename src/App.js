import './App.css';
import CreateTodo from './Todo/CreateTodo';
import TodosList from './Todo/TodosList';

function App() {
  return (
    <div className="App my-5">
      <CreateTodo />
      <div className='container justify-content-center row'>
        <div className='col-6'>
          <TodosList />
        </div>
      </div>
    </div>
  );
}

export default App;
