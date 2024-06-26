// import logo from "./logo.svg";
import "./App.css";
import Index from "./components/navbar/index";
import Second from "./components/navbar/secondcontainer/second";
import Third from "./components/navbar/thirdcontainer/thirdcontainer";
import Subfour from "./components/navbar/fourthcontainer/subfour";
import Banner from "./components/navbar/Banner/Banner";
import Sub_ITsection from "./components/navbar/ITsection/Sub_ITsection";
import Sub_Consulting_card from "./components/navbar/Consulting_card/Sub_Consulting_card";
import Banner2 from "./components/navbar/Banner2/Banner2";
import Department from "./components/navbar/Department/Department";
import Banner3 from "./components/navbar/Banner3/Banner3";
import Strategy from "./components/navbar/Strategy/Strategy";
import Question_box from "./components/navbar/Question_box/Question_box";
import Sight from "./components/navbar/Sights/Sight";
// import { Card } from "./components/navbar/Cards/Card";
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
      <Banner2 />
      <Department />
      <Banner3 />
      <Strategy />
      <Question_box />
      <Sight />
      {/* <Card /> */}
    </div>
  );
}

export default App;
