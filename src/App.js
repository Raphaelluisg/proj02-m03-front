import Header from './components/shared/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';
import Edit from './pages/Edit/Edit';
import TodolistView from './pages/TodolistView/TodolistView';

function App() {
  
  return (
    <div className="Navbar">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/tasks" component={Tasks}/>
          <Route path="/view/:id" component={TodolistView}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
    </div>
  );
}

export default App;