import { useState } from "react";
import "./App.css";
import About from "./assets/components/About";
import Navbar from "./assets/components/Navbar";
import TextForm from "./assets/components/TextForm";
import Alert from "./assets/components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = "Tech N Tech is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install Tech N Tech Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Tech N Tech" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
          <Route path="/about" element= {About}/>
           
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Notepad" mode={mode} />
          </Route>
        
      </div> 
    </Router>
  );
}
export default App;
