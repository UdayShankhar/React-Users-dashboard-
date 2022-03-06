import './App.css';
import {Routes,Route} from 'react-router-dom'
import AddUsers from './AddUsers';
import Products from './Products';
import Home from './Home';

function App() {
  return (
    <div className='App'>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
    <Route exact path='/add' element={<AddUsers/>}/>
        <Route exact path='/products' element={<Products />} />
  </Routes>
    </div>
  );
}


export default App;
