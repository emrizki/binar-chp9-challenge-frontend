import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Game from './pages/Game'

function App() {
  
  return (
    <Router>
      <Route path="/game" component={Game} />
    </Router>
  );
}

export default App;
