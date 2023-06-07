import React from "react";
import SideBar from "./components/sideBar";
import Main from "./components/main";

function App() {
  return (
    <div className="font-nunito h-screen w-screen overflow-hidden flex">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
