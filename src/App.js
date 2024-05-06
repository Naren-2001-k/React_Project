// import logo from "./logo.svg";
import "./App.css";
import Index from "./components/navbar/index";
import Second from "./components/navbar/secondcontainer/second";
import Third from "./components/navbar/thirdcontainer/thirdcontainer";
import Subfour from "./components/navbar/fourthcontainer/subfour";
import Banner from "./components/navbar/Banner/Banner";
import Sub_ITsection from "./components/navbar/ITsection/Sub_ITsection";
import Sub_Consulting_card from "./components/navbar/Consulting_card/Sub_Consulting_card";
function App() {
  return (
    <div className="App">
      <Index />
      <Second />
      <Third />
      <Subfour />
      <Banner />
      <Sub_ITsection />
      <Sub_Consulting_card />
    </div>
  );
}

export default App;
