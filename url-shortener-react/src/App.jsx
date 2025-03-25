//11 hours 05 mins
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { getApps } from "./Utils/helper";

function App() {
  const CurrentApp = getApps();

  return (
    <>
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </>
  );
}

export default App;

/*
  Sample User Creds
  -------------------
  1) brax123 , braxton_swag@gmail.com , securepass123
  2) John_Pol , polka.john@gmail.com , SecurePass@123
*/
