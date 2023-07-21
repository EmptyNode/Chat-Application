import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      // console.log(user);
      dispatch({
        type:"SET_USER",
        user:user
      })
    })
  }, [])
  return (
    <Router>
      <Switch>
        {!user? (<Login/>):(
        <div className="App">
          <div className='app__body'>
            <Sidebar />
            <Route exact path="/">
              <Chat />
            </Route>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
          </div>
        </div>
        )}
        
      </Switch>
    </Router>
  );
}

export default App;
