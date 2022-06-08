import { useState } from "react";

import "./App.css";

// importar componentes
import Profile from "./components/Profile";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hellow Corbaz</h1>
        <Profile />
        <UserList />
      </header>
    </div>
  );
}

export default App;
