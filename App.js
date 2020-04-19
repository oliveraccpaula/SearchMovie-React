import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'


class App extends Component {

  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />
    }

    return (
     <div className="App">
      <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/detail/:movieId' component={Detail} />
            
      </Switch>
     </div>
   );
  }
}

export default App;
