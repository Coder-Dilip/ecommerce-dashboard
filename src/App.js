
import './App.css';

import {Button} from 'react-bootstrap'
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './Login'
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';

import Protected from './Protected'
import Logout from './Logout';
function App() {
  return (
    <div className="App">
        <BrowserRouter >
        <Route exact path='/'>
    
    <>
    <Header />
    </>
  </Route>
     
     <Route path='/login'>
     
       <Login/>
     </Route>

     <Route path='/register'>
    
       <Register />
     </Route>

     <Route path='/add'>
   <>
       <Protected Cmp={AddProduct} />
       </>
     </Route>

     <Route path='/update'>
    
     <Protected Cmp={UpdateProduct} />
     </Route>
     <Route path='/username'>
    
       <>
       <Header />
       </>
     </Route>
     <Route path='/logout'>
    
       <>
       <Logout />
       </>
     </Route>
    
     
     
     </BrowserRouter>
     
     
    </div>
  );
}



export default App;
