import "./App.css";
import { useState } from "react";
import Home from "./Home";
import Favourite from "./Favourite";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [FavData, setFavData] = useState([]);

  const InputHandler = (data) => {
    setFavData(data);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home datahandler={InputHandler} />}
        />
        <Route
          exact
          path="/fav"
          component={() => <Favourite data={FavData} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
