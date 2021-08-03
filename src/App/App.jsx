import Header from "../components/header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (

    <>
      <BrowserRouter>
        <Header />

        <Switch>

          <h1 className="text-center">Data Warehouse</h1>
        </Switch>

      </BrowserRouter>
    </>

  );
}

export default App;
