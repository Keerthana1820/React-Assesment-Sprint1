
import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';


function App() {
  return (

    
    <Router>
    <div>
    

    <TodoList/>


    <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          
    
             
       </Switch>
        
    
    </div>
    </Router>
    
  );
}

export default App;
