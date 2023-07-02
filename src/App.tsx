import React from "react";
import "./App.css";
import { Projectlist } from "screens/project-list";
import { LoginScreen } from "screens/login";

function App() {
  return (
    <div className="App">
      {/* <Projectlist></Projectlist> */}
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
