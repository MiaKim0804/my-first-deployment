import './App.css';
import config from './config/index';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <footer>
        <div>BaseURL : {config.baseURL}</div>
      </footer>
      <Form />
    </>
    
      
  );
}

export default App;
