import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamesList from './components/GamesList';
import GameDetails from './components/GameDetails';
import React from 'react';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    const url = "http://127.0.0.1:3000/games"
    const response = fetch(url).then(response => response.json()).then(data => this.setState({ games: data }));
    console.log("RESPONSE FROM API IS: ", response);
  }

  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to the Video Game Blog - React Style!</h1>
          </Route>
          <Route exact path='/games'>
            <GamesList games={this.state.games}/>
          </Route>
          <Route path={`/games/:gameSlug`}>
            <GameDetails games={this.state.games}/>
          </Route>
        </Switch>
        
      </Router>
    );
  }

}

export default App;
