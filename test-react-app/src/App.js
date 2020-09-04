import React from "react";
import MainConteiner from "./conteiners/MainConteiner";

const App = (props) => {
  return (
    <div>
         <MainConteiner state={props.state}/>
    </div>
  );
};

export default App;
