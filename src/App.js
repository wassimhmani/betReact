import './App.css';
import Greet from './components/greet'
import Navbar from './components/navbar'
import Sport from './components/sport/sport'
import Live from './components/live/live'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar/>
      <Route path="/sport" component={Sport}/>
      <Route path="/Live" component={Live}/>
      
      
    </div>
    </Router>
    
  );
}

export default App;
