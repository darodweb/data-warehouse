import Header from "../components/header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/login/login'

function App() {

  return (

    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>



        </Switch>

      </BrowserRouter>
    </>

  );
}

export default App;
