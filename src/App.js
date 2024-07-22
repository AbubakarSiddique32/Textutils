import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "DarkMode TextUtils";
      setInterval(() => {
        document.title = "Wellcome to";
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils";
      }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "LightMode TextUtils";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        About="About"
        Contact="Contact Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}

      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/"> */}
        <TextForm
          heading="Enter The Text To Customize"
          showAlert={showAlert}
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
