import './App.css';
import Athira from './components/Athira/Athira';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/userdetails" component={Athira}/> 
  </BrowserRouter>
  </>
  );
}

export default App;
