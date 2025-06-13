import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Dashboard } from './components/dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React + TypeScript Scientific Calculator</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
