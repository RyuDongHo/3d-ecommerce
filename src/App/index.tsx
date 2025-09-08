import { BrowserRouter } from "react-router-dom";
import Page from "../Page";
import "./style/global.css";

const App = () => {
  return (
    <div className=" w-full h-full">
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </div>
  );
};

export default App;
