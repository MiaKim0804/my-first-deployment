import './App.css';
import config from './config/index';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <header className="App-header">
        <div>BaseURL : {config.baseURL}</div>
      </header>
      <Form />
    </>
    
      
  );
}

export default App;
