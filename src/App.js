import './App.css';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Routes />
      </Provider>
    </div>
  );
}

export default App;
