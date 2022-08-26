import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Store} from './store/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = Store();

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

