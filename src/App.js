import './App.css';
import Greet from './components/greet'
import Navbar from './components/navbar'
import Sport from './components/sport/sport'
import Live from './components/live/live'
import Casino from './components/casino/casino'
import Live_casino from './components/live_casino/live_casino'
import Entet from './components/Entete/entete'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Entet/>
      <Navbar/>
      <Route path="/sport" component={Sport}/>
      <Route path="/Live" component={Live}/>
      <Route path="/Casino" component={Casino}/>
      <Route path="/Live_casino" component={Live_casino}/>
      
      
    </div>
    </Router>
    
  );
}

export default App;
